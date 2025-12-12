import styled from "styled-components"
import { LayersControl } from "react-leaflet/LayersControl"
import { MapContainer } from "react-leaflet"
import { label2Text } from "../../style/global"

export const MapLayersControl = styled(LayersControl)`
  .leaflet-control-layers-toggle {
    border-radius: 8px; /* Exemplo de borda arredondada */
    padding: 10px; /* Exemplo de padding */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); /* Exemplo de sombra */
  }
`

export const FortalezaMapContainer = styled(MapContainer)`
  .overlay-control {
    position: relative;
    z-index: 10;
  }
  .leaflet-pane,
  .leaflet-top,
  .leaflet-bottom,
  .leaflet-left,
  .leaflet-right {
    z-index: 10;
    background-color: transparent !important;
  }
  .leaflet-control-layers:not(.leaflet-control-layers-expanded) {
    padding: 6px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    border: 1px solid var(--neutral-dark-gray);
    border-radius: 8px;

    text-decoration: none;
    &::before {
      content: "Camadas";
      color: var(--neutral-gray);
      ${label2Text}
    }
    &::after {
      content: "▼";
      font-size: 10px;
      color: var(--neutral-black);
    }
  }
  .leaflet-control-layers-toggle {
    width: auto;
    height: auto;
    background-image: none;
  }
  .leaflet-control-container .leaflet-top.leaflet-left {
    width: 100%;
  }

  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: var(--scrollbar-track-bg, "");
    transition: background-color 0.5s ease; /* Adiciona a transição suave */
  }

  .scrolling ::-webkit-scrollbar-track {
    background-color: #b8c0c2 !important;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    transition: background-color 0.5s ease; /* Adiciona a transição suave */
    background-color: var(--scrollbar-thumb-bg, "ffffff3f");
  }

  .scrolling ::-webkit-scrollbar-thumb {
    background-color: #ffffff !important;
  }
`
export const MapSubtitles = styled.div`
z-index: 100;
bottom: 10px;
left: 10px;
position: absolute;
display: flex;
flex-direction: column;
gap: 0.25rem;
align-items: flex-start;
padding: 6px 8px;
border-radius: 8px;
background-color: white;
border: 1px solid var(--neutral-dark-gray);
`
export const HorizontalWrapper = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;
span{
  color: var(--neutral-black);
  align-content: center;
}
`

export const MapColorSquere = styled.div`
position: relative;
min-height: 24px;
min-width: 24px;
width: 24px;

background-color: ${({ $color }) =>
      $color
        ? $color
        : 'red'};
content: " ads";
`;