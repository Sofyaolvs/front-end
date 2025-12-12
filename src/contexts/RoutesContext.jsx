import { createContext, useContext, useState, useEffect } from "react"
import { getCurrentAppliedGeoJSON } from "../services/apiService.js"

const RoutesContext = createContext({})

export function useRoutesContext() {
  return useContext(RoutesContext)
}

export default function RoutesProvider({ children }) {
  const [routesData, setRoutesData] = useState(null)
  const [routesDataIsLoaded, setRoutesDataIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRoutesData()
  }, [])

  async function fetchRoutesData() {
    setRoutesDataIsLoaded(false)
    setError(null)

    try {
      const response = await getCurrentAppliedGeoJSON()

      let geojsonData = null

      if (response.data) {
        geojsonData = response.data.geojsonData ||
                     response.data.geojson ||
                     response.data.data ||
                     (response.data.type === "FeatureCollection" ? response.data : null)
      }

      if (geojsonData && geojsonData.type === "FeatureCollection" && geojsonData.features) {
        setRoutesData(geojsonData)
        setRoutesDataIsLoaded(true)
      } else {
        const errorMsg = "Nenhuma versão aplicada do GeoJSON encontrada na API"
        console.error( errorMsg)
        console.error("Estrutura recebida não é um GeoJSON válido:", response.data)
        setError(new Error(errorMsg))
        setRoutesData(null)
        setRoutesDataIsLoaded(true)
      }
    } catch (error) {
      console.error("Erro ao buscar GeoJSON da API:", error)
      console.error("Detalhes do erro:", error.response?.data)
      setError(error)
      setRoutesData(null)
      setRoutesDataIsLoaded(true)
    }
  }

  async function refreshRoutesData() {
    await fetchRoutesData()
  }

  return (
    <RoutesContext.Provider
      value={{
        routesData,
        routesDataIsLoaded,
        error,
        refreshRoutesData,
      }}
    >
      {children}
    </RoutesContext.Provider>
  )
}
