import { useEffect } from "react"
import { useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-polylinedecorator"

function RoutePathHandler({ routePath }) {
  const map = useMap()

  const determineDirection = (start, end) => {
    const latDiff = end[1] - start[1]
    const lngDiff = end[0] - start[0]

    if (Math.abs(latDiff) >= Math.abs(lngDiff)) {
      return latDiff > 0 ? "SN" : "NS"
    } else {
      return lngDiff > 0 ? "OL" : "LO"
    }
  }

  const adjustRouteDirection = (geometry, expectedDirection) => {
    if (expectedDirection === "Desvio" || expectedDirection === "Circular") {
      return geometry
    }
    const coordinates = geometry.coordinates[0] 
    const start = coordinates[0]
    const end = coordinates[coordinates.length - 1]

    const currentDirection = determineDirection(start, end)

    if (currentDirection !== expectedDirection) {
      geometry.coordinates[0] = coordinates.reverse()
    }

    return geometry
  }

  useEffect(() => {
    if (routePath && routePath.length > 0) {
      const geoJsonLayer =
        routePath[0].sentido !== "Desvio"
          ? L.geoJSON(routePath[0].geometry)
          : L.geoJSON(routePath[1].geometry)
      const bounds = geoJsonLayer.getBounds()
      map.fitBounds(bounds, { padding: [50, 50] })

      routePath.forEach((route, index) => {
        const { sentido, geometry } = route

        const adjustedGeometry = adjustRouteDirection(geometry, sentido)

        const geoJsonLayer = L.geoJSON(adjustedGeometry, {
          style: () => ({
            color: route.cor,
            weight: 4,
            dashArray: sentido === "Desvio" ? "5, 5" : null,
          }),
        }).addTo(map)

        const coordinates = geoJsonLayer.getLayers()[0].getLatLngs()
        L.polylineDecorator(L.polyline(coordinates), {
          patterns: [
            {
              offset: 50,
              repeat: "100px",
              symbol: L.Symbol.arrowHead({
                pixelSize: 15,
                polygon: false,
                pathOptions: {
                  stroke: true,
                  color: route.cor,
                  weight: 5,
                },
              }),
            },
          ],
        }).addTo(map)
      })
    }
  }, [map, routePath])

  return null 
}

export default RoutePathHandler
