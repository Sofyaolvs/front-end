import { useEffect, useRef } from "react"
import { Marker } from "leaflet"
import { useMap } from "react-leaflet"
import L from "leaflet"

export const MapInterests = ({ pointsInterest }) => {
  const map = useMap()
  const layerRefs = useRef({})

  useEffect(() => {
    if (!map || !pointsInterest || pointsInterest.length === 0) return;

    // Limpar marcadores existentes
    Object.values(layerRefs.current).forEach((marker) => {
      map.removeLayer(marker)
    })
    layerRefs.current = {}

    // Criar novos marcadores
    pointsInterest.forEach((item, index) => {
      const customIcon = L.divIcon({
        className: "custom-div-interest-icon",
        html: `<div class="marker-number">${index + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      })

      const [lat, lng] = [...item.geometry.coordinates].reverse()
      const marker = new Marker([lat, lng], {
        icon: customIcon,
      }).addTo(map)

      // Adicionar evento de clique
      marker.on('click', () => {
        const targetId = `ponto-turistico-${index + 1}`
        const elemento = document.getElementById(targetId)

        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      })

      // Tornar o marcador clicável
      marker.getElement()?.style.setProperty('cursor', 'pointer')

      layerRefs.current[item.Name || item.name || `marker-${index}`] = marker
    })

    return () => {
      // Limpar marcadores ao desmontar
      Object.values(layerRefs.current).forEach((marker) => {
        map.removeLayer(marker)
      })
      layerRefs.current = {}
    }
  }, [map, pointsInterest])

  return null
}
