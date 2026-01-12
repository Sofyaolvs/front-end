import { useEffect, useRef } from "react"
import { Marker } from "leaflet"
import { useMap } from "react-leaflet"
import L from "leaflet"
import PontoTuristicoIcon from "../../assets/ponto-turistico.svg"
import PontoInteresseIcon from "../../assets/ponto-interesse.svg"

export const MapInterests = ({ pointsInterest }) => {
  const map = useMap()
  const layerRefs = useRef({})

  useEffect(() => {
    if (!map || !pointsInterest || pointsInterest.length === 0) return;

    Object.values(layerRefs.current).forEach((marker) => {
      map.removeLayer(marker)
    })
    layerRefs.current = {}

    pointsInterest.forEach((item, index) => {

      if (!item.geometry || !item.geometry.coordinates || item.geometry.coordinates.length < 2) {
        console.warn(`Ponto de interesse ${index} não possui coordenadas válidas:`, item)
        return
      }

      const [lng, lat] = item.geometry.coordinates
      const latitude = parseFloat(lat)
      const longitude = parseFloat(lng)

      if (isNaN(latitude) || isNaN(longitude)) {
        console.warn(`Coordenadas inválidas no ponto ${index}:`, { lat, lng, item })
        return
      }

      const tipo = item.properties?.Tipo || item.properties?.tipo || item.Tipo || item.tipo || ''
      const nome = item.properties?.Name || item.properties?.name || item.Name || item.name || `Ponto ${index + 1}`


      let iconUrl = PontoInteresseIcon 

      const tipoLower = tipo.toLowerCase()
      if (tipoLower.includes('turístico') || tipoLower.includes('turistico')) {
        iconUrl = PontoTuristicoIcon
      } else {
        iconUrl = PontoInteresseIcon
      }

      const customIcon = L.icon({
        iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      const marker = new Marker([latitude, longitude], {
        icon: customIcon,
      }).addTo(map)

      const descricao = item.properties?.description || item.properties?.descricao || item.properties?.Descricao ||
                       item.description || item.descricao || item.Descricao || ''

      const tipoExibicao = tipo || 'Ponto de Interesse'
      const isTuristico = tipoLower.includes('turístico') || tipoLower.includes('turistico')
      const corBadge = isTuristico ? '#EB5B26' : '#0F978A' // Laranja para turístico, verde para interesse
      const corBorda = isTuristico ? '#EB5B26' : '#0F978A'

      const popupContent = `
        <div style="font-family: 'Roboto', Arial, sans-serif; padding: 8px; min-width: 200px;">
          <div style="display: inline-block; background-color: ${corBadge}; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase;">
            ${tipoExibicao}
          </div>
          <h3 style="margin: 0 0 10px 0; color: #2C3E50; font-size: 16px; font-weight: 600; border-bottom: 2px solid ${corBorda}; padding-bottom: 6px;">
            ${nome}
          </h3>
          ${descricao ? `<p style="margin: 0; color: #555; font-size: 14px; line-height: 1.5;">${descricao}</p>` : ''}
        </div>
      `
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
      })

      marker.on('click', () => {
        const targetId = `ponto-turistico-${index + 1}`
        const elemento = document.getElementById(targetId)

        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      })

      marker.getElement()?.style.setProperty('cursor', 'pointer')

      layerRefs.current[item.Name || item.name || `marker-${index}`] = marker
    })

    return () => {
      Object.values(layerRefs.current).forEach((marker) => {
        map.removeLayer(marker)
      })
      layerRefs.current = {}
    }
  }, [map, pointsInterest])

  return null
}
