import React from "react"
import { LayersControl, TileLayer } from "react-leaflet"

const MyTileLayer = ({ checked = false, name, attribution, url, ...props }) => {
  return (
    <LayersControl.BaseLayer id="BaseLayer" name={name} checked={checked}>
      <TileLayer
        id="TileLayer"
        attribution={attribution}
        url={url}
        {...props}
      />
    </LayersControl.BaseLayer>
  )
}

export default MyTileLayer
