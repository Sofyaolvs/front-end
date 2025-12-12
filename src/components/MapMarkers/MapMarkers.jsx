import { useEffect, useRef } from "react"
import { Marker } from "leaflet"
import { useMap } from "react-leaflet"
import L from "leaflet"

import ApoioMarker from "../../assets/marcadores/ponto-apoio-marcador.svg"
import SaudeMarker from "../../assets/marcadores/ponto-saude-marcador.svg"

export const MapMarkers = ({ points, markerType = "default", startIndex = 1 }) => {
  const map = useMap()
  const layerRefs = useRef({})

  useEffect(() => {
    if (!map || !points || points.length === 0) {
      return
    }

    // Remove ícones antigos
    Object.values(layerRefs.current).forEach((marker) => map.removeLayer(marker))
    layerRefs.current = {}

    let successCount = 0

    points.forEach((item, index) => {

      // 🔥 Escolher imagem do ícone (SEM HTML, SEM DIVICON)
      let iconUrl = null

      if (markerType === "apoio") {
        iconUrl = ApoioMarker
      } else if (markerType === "saude") {
        iconUrl = SaudeMarker
      } else {
        // fallback: numerado ou outro tipo
        iconUrl = ApoioMarker // coloque um padrão se quiser
      }

      const customIcon = L.icon({
        iconUrl,
        iconSize: [25, 41],    // AJUSTE AQUI O TAMANHO
        iconAnchor: [18, 36],  // ponto inferior central
        popupAnchor: [0, -36],
      })

      // 📌 Coordenadas
      let coordinates
      if (item.geometry?.coordinates) {
        const coords = item.geometry.coordinates

        if (item.geometry.type === "MultiPoint" && Array.isArray(coords[0]) && Array.isArray(coords[0][0])) {
          coordinates = coords[0][0]
        } else if (Array.isArray(coords[0]) && typeof coords[0][0] === "number") {
          coordinates = coords[0]
        } else if (typeof coords[0] === "number" && typeof coords[1] === "number") {
          coordinates = coords
        } else {
          return
        }
      } else {
        return
      }

      const [lng, lat] = coordinates

      if (isNaN(lat) || isNaN(lng)) return

      try {
        const marker = new Marker([lat, lng], {
          icon: customIcon,
        }).addTo(map)

        if (item.popup) {
          marker.bindPopup(item.popup)
        }

        const key = item.Name || item.name || `${markerType}-${index}`
        layerRefs.current[key] = marker
        successCount++
      } catch (error) {
        console.error(error)
      }
    })

    return () => {
      Object.values(layerRefs.current).forEach((marker) =>
        map.removeLayer(marker)
      )
      layerRefs.current = {}
    }
  }, [map, points, markerType, startIndex])

  return null
}
