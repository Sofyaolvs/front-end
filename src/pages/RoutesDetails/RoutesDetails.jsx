import React, { useEffect, useState } from "react"
import { useLayersContext } from "../../contexts/LayersContext.jsx"
import { useRoutesContext } from "../../contexts/RoutesContext.jsx"
import WhereFindImage from "../../assets/where-find-header.png"
import {
  Container,
  HeroSectionImage,
  HeroSectionContainer,
  HeroSectionContent,
  ContentWrapper,
  MapBox,
  TopInfoWrapper,
  HorizontalWrapper,
  IconInfo,
  IconText,
  MainContent,
  AboutSection,
  TuristicSpotsSection,
  TuristicSpotsItem,
  TouristAttractionTitle,
  TuristicSpotsTitle,
  TouristAttractionContainer,
  RouteDetailTitle,
  RouteDetailDescription,
  RouteTextContainer,
  BairroTextStrong,
  BairrosRow,
  ImageSection,
} from "./styles.js"
import watchIcon from "../../assets/watchIcon.svg"
import locationIcon from "../../assets/locationIcon.svg"
import montainIcon from "../../assets/montainIcon.svg"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import FortalezaMap from "../../components/FortalezaMap/FortalezaMap.jsx"
import routesTexts from "../../resources/routesTexts.js"
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent.jsx"
import { ImageDisplay } from "../../components/ImageDisplay/ImageDisplay.jsx"
// import DirectionsBike from "../../assets/directions-bike.svg"
// import DirectionsBikeMarker from "../../assets/marcadores/bicicletar-marcador.svg"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import { formatDuration } from "../../utils/utils.js"

export default function RouteDetails() {
  const [route, setRoute] = useState(null)
  const [pontosInteresse, setPontosInteresse] = useState(null)
  const [pontosApoio, setPontosApoio] = useState(null)
  const [pontosSaude, setPontosSaude] = useState(null)
  const [loading, setLoading] = useState(true)
  const { fetchSingleLayerData, layersDataIsLoaded, formattedLayersData } =
    useLayersContext()
  const { routesData, routesDataIsLoaded } = useRoutesContext()
  const { routeId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from

  const bicicletarLayerData = formattedLayersData.filter((data) => {
    return data.name === "Estações Bicicletar"
  })

  useEffect(() => {
    if (!routesDataIsLoaded || !routesData) {
      return
    }

    const currentRoutes = routesData.features.filter(
      (route) => (route.properties.id || route.properties.fid) == parseInt(routeId)
    )
    if (
      formattedLayersData.filter(
        (data) => data.name === "Estações Bicicletar"
      )[0].data.length == 0
    ) {
      console.log("fetching in RoutesDetails")
      fetchSingleLayerData("estacoes-bicicletar")
    }
    if (currentRoutes.length === 0) {
      return navigate("/PageNotFound")
    }
    const pontosInteresseArray = Array.from(
      new Map(
        currentRoutes
          .flatMap((route) => route.properties.pontos_interesse?.pts || route.properties.pontos_interesse || []) 
          .filter((item) => item) 
          .map((item) => [JSON.stringify(item), item]) 
      ).values() 
    )
      .flat()
      .filter((item) => item)

    const pontosApoioArray = Array.from(
      new Map(
        currentRoutes
          .flatMap((route) => route.properties.pontos_apoio?.pts || [])
          .filter((item) => item)
          .map((item) => [JSON.stringify(item), item])
      ).values()
    )
      .flat()
      .filter((item) => item)

    // Extrair pontos de saúde (hospitais, UPAs)
    const pontosSaudeArray = Array.from(
      new Map(
        currentRoutes
          .flatMap((route) => route.properties.pontos_saude?.pts || [])
          .filter((item) => item)
          .map((item) => [JSON.stringify(item), item])
      ).values()
    )
      .flat()
      .filter((item) => item)

    setPontosInteresse(pontosInteresseArray)
    setPontosApoio(pontosApoioArray)
    setPontosSaude(pontosSaudeArray)
    setRoute(currentRoutes)
    setLoading(false)
  }, [routeId, navigate, routesData, routesDataIsLoaded])

  const { isTablet } = useWindowDimensions()
  // const bread = [
  //   { label: "Início", path: "/" },
  //   { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
  //   { label: "Quiz", path: "/quiz" },
  //   { label: "Rotas encontradas", path: "/rotas-encontradas" },
  //   { label: routesTexts[routeId].banner, path: `/rotas/${routeId}` },
  // ]

  const routeGeoData = route?.[0]?.properties || {}
  const routeTextData = routesTexts[routeId] || {}

  // Verificar se tem texto_pagina do GeoJSON (HTML)
  const hasTextoPagina = routeGeoData.texto_pagina && routeGeoData.texto_pagina.trim().length > 0

  const routeData = {
    ...routeGeoData,
   
    banner: routeGeoData.banner || routeGeoData.titulo || routeTextData.banner || routeGeoData.rota,
    descricao: routeGeoData.descricao || routeTextData.descricao || routeGeoData.titulo || '',
    pontosTuristicos: routeGeoData.pontosTuristicos || routeTextData.pontosTuristicos || {},
    bairros: routeGeoData.bairros || routeTextData.bairros || {},
    titulo: routeGeoData.titulo || routeTextData.titulo,
    link: `/rotas/${routeId}`,
    texto_pagina: routeGeoData.texto_pagina,
    hasTextoPagina,
  }

  const breadAlternate = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Todas as rotas", path: "/rotas" },
    { label: routeData.banner || routeData.rota, path: `/rotas/${routeId}` },
  ]

  const searchText = location.state?.searchText

  const breadFromSearch = [
    { label: "Início", path: "/" },
    { label: "Busca", path: `/busca/${searchText}` },
    { label: routeData.banner || routeData.rota, path: `/rotas/${routeId}` },
  ]

  const breadQuiz = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Quiz", path: "/quiz" },
    { label: "Rotas encontradas", path: "/rotas-encontradas" },
    { label: routeData.banner || routeData.rota, path: `/rotas/${routeId}` },
  ]

  const breadAllRoutesQuiz = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Quiz", path: "/quiz" },
    { label: "Rotas encontradas", path: "/rotas-encontradas" },
    {
      label: "Todas as rotas",
      path: "/rotas-encontradas/rotas",
      state: { from: "rotas-encontradas" },
    },
    { label: routeData.banner || routeData.rota, path: `/rotas/${routeId}` },
  ]

  const fromPageBread = (() => {
    if (location.pathname.includes("/rotas-encontradas/rotas/")) {
      return breadAllRoutesQuiz
    } else {
      return fromPage === "pedale-por-fortaleza" || fromPage === undefined
        ? breadAlternate
        : fromPage === "busca"
          ? breadFromSearch
          : fromPage === "rotas-encontradas"
            ? breadQuiz
            : fromPage
    }
  })()

  // Criar pontosTuristicos baseado nos pontos_interesse do mapa
  const pontosTuristicosData = {}

  // Pegar pontos de interesse do mapa
  if (pontosInteresse && pontosInteresse.length > 0) {
    pontosInteresse.forEach((ponto, index) => {
      const nomePonto = ponto.Name || ponto.name || `Ponto ${index + 1}`
      // Buscar descrição do routeData.pontosTuristicos ou usar string vazia
      const descricao = routeData.pontosTuristicos?.[nomePonto] || ""
      pontosTuristicosData[nomePonto] = descricao
    })
  } else {
    // Fallback: usar pontosTuristicos do routeData se não houver pontos_interesse
    Object.assign(pontosTuristicosData, routeData.pontosTuristicos || {})
  }

  const pontosTuristicosElements = Object.entries(pontosTuristicosData).map(([key, value], index) => {
    return (
      <TouristAttractionContainer key={index} id={`ponto-turistico-${index + 1}`}>
        <TouristAttractionTitle>
          {index + 1}. {key}
        </TouristAttractionTitle>
        {value && value.trim().length > 0 && (
          <p>
            {value.split("\n").map((line, lineIndex) => (
              <React.Fragment key={lineIndex}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        )}
      </TouristAttractionContainer>
    )
  })

  const bairrosElements = (Array.isArray(routeData.bairros)
    ? routeData.bairros.flat()
    : Object.values(routeData.bairros || {})
  ).map((bairro, index) => (
    <span key={`bairro-${index}`}>{`${bairro}`}</span>
  ))
  return (
    <Container>
      <BreadcrumbComponent bread={fromPageBread} contrast={true} />
      <HeroSectionContainer $isTablet={isTablet}>
        <HeroSectionContent>
          <RouteTextContainer $isTablet={isTablet}>
            <RouteDetailTitle> {routeData.banner || routeData.rota}</RouteDetailTitle>
            <RouteDetailDescription $isTablet={isTablet}>
              {/* {routeData.subtitulo} */}
            </RouteDetailDescription>
          </RouteTextContainer>
        </HeroSectionContent>
        <HeroSectionImage
          className={"about-hero-image"}
          src={WhereFindImage}
          alt=""
        />
      </HeroSectionContainer>
      {loading ? (
        <ContentWrapper></ContentWrapper>
      ) : (
        <ContentWrapper>
          <TopInfoWrapper>
            <MapBox
              $isTablet={isTablet}
              loading={!layersDataIsLoaded ? "true" : undefined}
            >
              {!layersDataIsLoaded ? (
                <p>Carregando...</p>
              ) : (
                <FortalezaMap
                  layersData={bicicletarLayerData}
                  routePath={route.map((route) => ({
                    cor: route.properties.cor,
                    geometry: route.geometry,
                    sentido: route.properties.sentido,
                  }))}
                  mapSubtitles={route.map((route) => ({
                    sentido: route.properties.sentido,
                    cor: route.properties.cor,
                  }))}
                  pointsInterest={pontosInteresse}
                  pontosApoio={pontosApoio}
                  pontosSaude={pontosSaude}
                  center
                />
              )}
            </MapBox>
            <HorizontalWrapper $isTablet={isTablet}>
              <IconInfo>
                <img src={watchIcon} alt={"relógio"} />
                <IconText $isTablet={isTablet}>
                  {formatDuration(Math.round((route[0].properties.dist_total / 1000) / 15 * 60))}
                </IconText>
              </IconInfo>
              <IconInfo>
                <img src={locationIcon} alt={"distância"} />
                <IconText $isTablet={isTablet}>
                  {parseInt(route[0].properties.dist_total / 1000).toFixed(1)}{" "}
                  km
                </IconText>
              </IconInfo>
              <IconInfo>
                <img src={montainIcon} alt={"inclinação"} />
                <IconText $isTablet={isTablet}>
                  {route[0].properties.inclinacao?.toFixed(2)} %
                </IconText>
              </IconInfo>
            </HorizontalWrapper>
          </TopInfoWrapper>
          <MainContent>
            {routeData.hasTextoPagina ? (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: routeData.texto_pagina }}
                  style={{
                    width: '100%',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#333'
                  }}
                />
                {/* Renderizar pontos com IDs mesmo quando há texto_pagina customizado */}
                {pontosTuristicosElements.length > 0 && (
                  <TuristicSpotsSection style={{ marginTop: '2rem' }}>
                    <TuristicSpotsTitle $isTablet={isTablet}>
                      Pontos turísticos
                    </TuristicSpotsTitle>
                    {pontosTuristicosElements}
                  </TuristicSpotsSection>
                )}
              </>
            ) : (
              <>
                <AboutSection $isTablet={isTablet}>
                  <h2>Sobre o passeio</h2>
                  <p>{routeData.descricao}</p>
                </AboutSection>
                <BairrosRow>
                  <BairroTextStrong>Bairros:</BairroTextStrong>
                  {bairrosElements}
                </BairrosRow>
                <TuristicSpotsSection>
                  <TuristicSpotsTitle $isTablet={isTablet}>
                    Pontos turísticos
                  </TuristicSpotsTitle>
                  {pontosTuristicosElements}
                </TuristicSpotsSection>
              </>
            )}
          </MainContent>
          <ImageSection>
            <ImageDisplay images={route[0]?.properties?.fotos || []} />
          </ImageSection>
        </ContentWrapper>
      )}
    </Container>
  )
}
