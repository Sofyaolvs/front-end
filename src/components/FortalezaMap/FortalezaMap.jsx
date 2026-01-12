import { ZoomControl, GeoJSON } from "react-leaflet"
import { useState, useEffect } from "react"
import RoutePathHandler from "../RoutePathHandler.jsx"
import { MapFilters } from "../MapFilters/MapFilters.jsx"
import {
  MapLayersControl,
  FortalezaMapContainer,
  MapSubtitles,
  HorizontalWrapper,
  MapColorSquere,
} from "./styles.js"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import MyTileLayer from "../MyTileLayer.jsx"
import "leaflet/dist/leaflet.css"
import { FullscreenControl } from "react-leaflet-fullscreen"
import "leaflet.fullscreen/Control.FullScreen.css"
import { MapDirectionDictionary } from "../../utils/mapDirectionDictionary.js"
import { MapInterests } from "../MapInterests/MapInterests.jsx"
import PontoApoioIcon from "../../assets/ponto-apoio.svg"
import PontoSaudeIcon from "../../assets/ponto-saude.svg"

export default function FortalezaMap({
  layersData,
  extraFilters = true,
  routePath,
  mapSubtitles,
  pointsInterest,
  pontosApoio,
  pontosSaude,
}) {
  const { isMobile } = useWindowDimensions()
  const [limiteFortaleza, setLimiteFortaleza] = useState(null)

  useEffect(() => {
    fetch('/Limite_Fortaleza.geojson')
      .then(response => response.json())
      .then(data => setLimiteFortaleza(data))
      .catch(error => console.error('Erro ao carregar GeoJSON:', error))
  }, [])

  const customMarkers = []
  if (pontosApoio) {
    customMarkers.push({
      name: "Pontos de Apoio",
      icon: PontoApoioIcon,
      points: pontosApoio,
      markerType: "apoio",
      color:'#3F5660'
    })
  }
  if (pontosSaude) {
    customMarkers.push({
      name: "Pontos de Saúde",
      icon: PontoSaudeIcon,
      points: pontosSaude,
      markerType: "saude",
      color:'#23A4DE'
    })
  }

  return (
    <FortalezaMapContainer
      id="MapContainer"
      center={[-3.7319, -38.5267]}
      zoom={13}
      minZoom={12}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      attributionControl={true}
      zoomControl={false}
      style={{ width: "100%", height: isMobile ? "224px" : "650px" }}
    >
      {extraFilters && <MapFilters layersData={layersData} customMarkers={customMarkers} />}
      {pointsInterest && <MapInterests pointsInterest={pointsInterest} />}
      <MapLayersControl position="bottomright">
        <MyTileLayer
          id="default"
          checked={true}
          name={"Padrão"}
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyTileLayer
          id={"CartoDB-Positron"}
          name={"Cinza"}
          url={"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"}
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
          checked={false}
        />
        <MyTileLayer
          id={"Esri-World-Imagery"}
          name={"Satélite"}
          url={
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          }
          attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          checked={false}
        />
      </MapLayersControl>
      {mapSubtitles && (
        <MapSubtitles>
          {mapSubtitles.map((item, index) => (
            <HorizontalWrapper key={index}>
              <MapColorSquere id="MapColorSquere-1" $color={item.cor} />
              <span>{MapDirectionDictionary[item.sentido]}</span>
            </HorizontalWrapper>
          ))}
        </MapSubtitles>
      )}
      <FullscreenControl position="bottomright" />
      <ZoomControl position="bottomright" forceSeparateButton={true} />
      {routePath && <RoutePathHandler routePath={routePath} />}

      {limiteFortaleza &&(
        <GeoJSON
        data={limiteFortaleza}
        style={{
          color:'#F15A22',
          weight:2,
          opacity:2,
          fillColor:0.8,
          fillColor:'#F15A22',
          fillOpacity:0.1
        }}
        
        />
      )}
      
    </FortalezaMapContainer>
  )
}
