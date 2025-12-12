import { useEffect, useRef } from "react"
import { Marker } from "leaflet"
import { useMap } from "react-leaflet"
import L from "leaflet"

export const MapInterests = ({ pointsInterest }) => {
  const map = useMap()
  const layerRefs = useRef({})
  useEffect(() => {
    if (!map) return;
    if (Object.keys(layerRefs.current).length === 0) {
      pointsInterest.forEach((item, index) => {
        const customIcon = L.divIcon({
          className: "custom-div-interest-icon", // Classe personalizada para estilização
          html: `<div class="marker-number">${index + 1}</div>`, // Conteúdo com o número
          iconSize: [30, 30], // Tamanho do ícone
          iconAnchor: [15, 30], // Âncora para alinhar o ícone ao ponto
        })

        const [lat, lng] = [...item.geometry.coordinates].reverse()
        const marker = new Marker([lat, lng], {
          icon: customIcon,
        }).addTo(map)

        marker.on('click', () => {
          const elemento = document.getElementById(`ponto-turistico-${index + 1}`)
          if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        })

        layerRefs.current[item.Name || item.name] = marker
      })
    }
    return () => {
      // Limpar marcadores ao desmontar ou quando `pointsInterest` mudar
      Object.values(layerRefs.current).forEach((marker) =>
        map.removeLayer(marker)
      )
      layerRefs.current = {}
    }
  }, [map, JSON.stringify(pointsInterest)])

  return null // Este componente não renderiza nada diretamente
}
