import React, { createContext, useState, useEffect, useContext } from "react"
import { pagesTexts } from "../resources/texts"
import { useRoutesContext } from "./RoutesContext.jsx"
import routesTexts from "../resources/routesTexts.js"

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("")
  const [filteredTexts, setFilteredTexts] = useState([])
  const { routesData, routesDataIsLoaded } = useRoutesContext()

  useEffect(() => {
    if (!routesDataIsLoaded || !routesData) {
      return
    }

    const searchTextTrimmed = searchText.trim().toLowerCase()

    if (!searchTextTrimmed) {
      setFilteredTexts([])
      return
    }

    const searchTextWords = searchTextTrimmed.split(" ")

    const cleanText = (text) => {
      return text.replace(/,$/, "").trim()
    }

    const filterTextArray = (textsArray, searchTextWords) => {
      return textsArray.filter(
        (text) =>
          typeof text === "string" &&
          searchTextWords.some((word) =>
            new RegExp(`\\b${word}\\b`).test(text.toLowerCase())
          )
      )
    }

    const filteredPagesTexts = pagesTexts
      .map((page) => {
        const combinedText = [page.name, ...page.texts]
          .flat()
          .map((text) => (typeof text === "string" ? text.toLowerCase() : ""))
          .join(" ")

        const matchingTexts = filterTextArray(page.texts, searchTextWords)

        if (
          matchingTexts.length > 0 ||
          new RegExp(`\\b${searchTextTrimmed}\\b`).test(combinedText)
        ) {
          return {
            ...page,
            matchingTexts:
              matchingTexts.length > 0
                ? matchingTexts.map(cleanText)
                : [cleanText(page.name)],
          }
        } else {
          return null
        }
      })
      .filter((page) => page !== null)

    // Criar um objeto único de rotas por ID
    const uniqueRoutes = routesData.features.reduce((acc, feature) => {
      const routeId = feature.properties.id || feature.properties.fid
      if (!acc[routeId]) {
        acc[routeId] = feature.properties
      }
      return acc
    }, {})

    const filteredRoutesTexts = Object.entries(uniqueRoutes)
      .map(([routeId, route]) => {
        const routeTextData = routesTexts[routeId] || {}

        // PRIORIDADE: GeoJSON da API → Arquivo local → Fallbacks
        const mergedRoute = {
          ...route,
          banner: route.banner || route.titulo || routeTextData.banner || route.rota,
          descricao: route.descricao || routeTextData.descricao || route.titulo || '',
          pontosTuristicos: route.pontosTuristicos || routeTextData.pontosTuristicos || {},
          bairros: route.bairros || routeTextData.bairros || {},
        }

        const pontosTuristicosValues = mergedRoute.pontosTuristicos
          ? Object.values(mergedRoute.pontosTuristicos)
          : []

        const bairros = mergedRoute.bairros
          ? (Array.isArray(mergedRoute.bairros) ? mergedRoute.bairros.flat() : Object.values(mergedRoute.bairros))
          : []

        const combinedText = [
          mergedRoute.rota,
          mergedRoute.titulo,
          mergedRoute.descricao,
          ...pontosTuristicosValues,
          ...bairros,
        ]
          .flat()
          .map((text) => (typeof text === "string" ? text.toLowerCase() : ""))
          .join(" ")

        const matchingTexts = filterTextArray(
          pontosTuristicosValues,
          searchTextWords
        )

        if (
          matchingTexts.length > 0 ||
          new RegExp(`\\b${searchTextTrimmed}\\b`).test(combinedText)
        ) {
          return {
            name: mergedRoute.banner || mergedRoute.titulo || mergedRoute.rota,
            descricao: mergedRoute.descricao,
            link: `/rotas/${routeId}`,
            matchingTexts:
              matchingTexts.length > 0
                ? matchingTexts.map(cleanText)
                : [cleanText(mergedRoute.descricao || mergedRoute.titulo || mergedRoute.rota)],
            pontosTuristicos: mergedRoute.pontosTuristicos,
          }
        } else {
          return null
        }
      })
      .filter((route) => route !== null)

    const newFilteredTexts = [...filteredPagesTexts, ...filteredRoutesTexts]

    setFilteredTexts(newFilteredTexts)
  }, [searchText, routesData, routesDataIsLoaded])

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, filteredTexts }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}
