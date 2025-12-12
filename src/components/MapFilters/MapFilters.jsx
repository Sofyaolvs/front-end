import { useState, useEffect, useRef } from "react"
import { Control, GeoJSON, Marker } from "leaflet"
import { useMap } from "react-leaflet"
import { ButtomsContainer, ButtomsScroller, Buttom } from "./styles"
import { MapMarkers } from "../MapMarkers/MapMarkers.jsx"
import L from "leaflet"
export const MapFilters = ({ layersData, customMarkers = [], position = "topleft" }) => {
  const map = useMap()
  const [controlReady, setControlReady] = useState(false)
  const [activeCustomMarkers, setActiveCustomMarkers] = useState({})
  const layerRefs = useRef({})
  const controlInstance = useRef(null)
  const scrollerRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const defaultShadow =
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"

  useEffect(() => {
    layersData.forEach((layer) => {
      if (layerRefs.current[layer.name] && map.hasLayer(layerRefs.current[layer.name])) {
        map.removeLayer(layerRefs.current[layer.name])
      }

      layerRefs.current[layer.name] = new GeoJSON(layer.data, {
        style: layer.style,
        pointToLayer: (feature, latlng) => {
          if (layer.marker) {
            const customIcon = new L.Icon({
              iconUrl: layer.marker,
              iconSize: [25, 41], 
              iconAnchor: [12, 41], 
              shadowUrl: defaultShadow, 
              shadowSize: [41, 41], 
              shadowAnchor: [12, 41], 
            })
            return new Marker(latlng, {
              icon: customIcon,
            })
          }
          return new Marker(latlng) 
        },
      })
    })

    if (!controlInstance.current) {
      const filterControlDiv = Control.extend({
        onAdd: function () {
          const div = document.createElement("div")
          div.className = "overlay-control"
          return div
        },
      })

      controlInstance.current = new filterControlDiv({ position })
      controlInstance.current.addTo(map)

      setControlReady(true)
    }
  }, [map, layersData, position])

  const toggleLayer = (layerName) => {
    const layerRef = layerRefs.current[layerName]
    if (map.hasLayer(layerRef)) {
      map.removeLayer(layerRef)
    } else {
      map.addLayer(layerRef)
    }
  }

  const toggleCustomMarker = (markerName) => {
    setActiveCustomMarkers(prev => ({
      ...prev,
      [markerName]: !prev[markerName]
    }))
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - scrollerRef.current.offsetLeft
    scrollLeft.current = scrollerRef.current.scrollLeft

    // Desativar a interação do mapa
    map.dragging.disable()
    map.doubleClickZoom.disable()
    // map.scrollWheelZoom.disable();

    // Adicionar a classe "scrolling" ao scroller
    scrollerRef.current.classList.add("scrolling")
    // Forçar estilos diretamente via JavaScript
    scrollerRef.current.style.setProperty("--scrollbar-thumb-bg", "#6161613e")

    // Adicionar eventos globais
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    e.stopPropagation()
    e.preventDefault()
  }

  const handleMouseUp = (e) => {
    isDragging.current = false

    // Reativar a interação do mapa
    map.dragging.enable()
    map.doubleClickZoom.enable()
    // map.scrollWheelZoom.enable();

    // Remover a classe "scrolling" ao scroller
    scrollerRef.current.classList.remove("scrolling")

    // Reverter estilos via JavaScript
    scrollerRef.current.style.setProperty("--scrollbar-thumb-bg", "")

    // Remover eventos globais
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
    e.stopPropagation()
    e.preventDefault()
  }

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const x = e.pageX - scrollerRef.current.offsetLeft
      const walk = x - startX.current // Velocidade de rolagem
      scrollerRef.current.scrollLeft = scrollLeft.current - walk
      e.stopPropagation()
      e.preventDefault()
    }
  }
  const handleTouchMove = (e) => {
    e.stopPropagation()
  }

  return (
    controlReady && (
      <>
        <div className="overlay-control">
          <ButtomsContainer onTouchMove={handleTouchMove}>
            <ButtomsScroller
              ref={scrollerRef}
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {layersData.map((layer) => (
                <Buttom
                  key={layer.name}
                  color={layer.style.color}
                  filter={layer.style.filter}
                >
                  <input
                    type="checkbox"
                    value={layer.name}
                    id={layer.name}
                    onChange={() => toggleLayer(layer.name)}
                  />
                  <img src={layer.icon} alt={layer.name} />
                  <span>{layer.name}</span>
                </Buttom>
              ))}
              {customMarkers.map((marker) => (
                <Buttom
                  key={marker.name}
                  color={marker.color || "#000"}
                  filter={marker.filter}
                >
                  <input
                    type="checkbox"
                    value={marker.name}
                    id={marker.name}
                    onChange={() => toggleCustomMarker(marker.name)}
                  />
                  <img src={marker.icon} alt={marker.name} />
                  <span>{marker.name}</span>
                </Buttom>
              ))}
            </ButtomsScroller>
          </ButtomsContainer>
        </div>
        {customMarkers.map((marker) =>
          activeCustomMarkers[marker.name] && (
            <MapMarkers
              key={marker.name}
              points={marker.points}
              markerType={marker.markerType}
              startIndex={1}
            />
          )
        )}
      </>
    )
  )
}
