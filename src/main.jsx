import React from "react"

import { createRoot } from "react-dom/client"
import LayersProvider from "./contexts/LayersContext.jsx"
import RoutesProvider from "./contexts/RoutesContext.jsx"
import { AcessibilityProvider } from "./contexts/AcessibilityContext.jsx"
import { SearchProvider } from "./contexts/SearchContext.jsx"

import App from "./App.jsx"

import "./index.css"

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <LayersProvider>
      <RoutesProvider>
        <AcessibilityProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </AcessibilityProvider>
      </RoutesProvider>
    </LayersProvider>
  </React.StrictMode>
)

