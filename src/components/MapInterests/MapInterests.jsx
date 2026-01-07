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
      // Validar se as coordenadas existem e são válidas
      if (!item.geometry || !item.geometry.coordinates || item.geometry.coordinates.length < 2) {
        console.warn(`Ponto de interesse ${index} não possui coordenadas válidas:`, item)
        return
      }

      const [lng, lat] = item.geometry.coordinates
      const latitude = parseFloat(lat)
      const longitude = parseFloat(lng)

      // Verificar se as coordenadas são números válidos
      if (isNaN(latitude) || isNaN(longitude)) {
        console.warn(`Coordenadas inválidas no ponto ${index}:`, { lat, lng, item })
        return
      }

      const customIcon = L.divIcon({
        className: "custom-div-interest-icon",
        html: `<div class="marker-number">${index + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      })

      const marker = new Marker([latitude, longitude], {
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
