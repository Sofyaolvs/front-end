import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import WhereFindImage from "../../assets/where-find-header.png"
import { RouteCard } from "../../components/RouteCard/RouteCard.jsx"
import {
  Container,
  HeroSectionImage,
  HeroSectionContainer,
  HeroSectionContent,
  ContentWrapper,
} from "./styles.js"
import CardImage1 from "../../assets/cardsImage/card-image-1.png"
import CardImage2 from "../../assets/cardsImage/card-image-2.png"
import CardImage3 from "../../assets/cardsImage/card-image-3.png"
import CardImage4 from "../../assets/cardsImage/card-image-4.png"
import CardImage5 from "../../assets/cardsImage/card-image-5.png"
import { useRoutesContext } from "../../contexts/RoutesContext.jsx"
import { uniqueFeatures } from "../../utils/uniqueFeaturesFilter.js"

import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent"

const cardImageArray = [
  CardImage1,
  CardImage2,
  CardImage3,
  CardImage4,
  CardImage5,
]
export default function ContactPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from
  const { routesData, routesDataIsLoaded, error } = useRoutesContext()
  const [allRoutes, setAllRoutes] = useState([])
  let idList = []

  useEffect(() => {
    if (routesDataIsLoaded && routesData) {
      if (routesData.features && Array.isArray(routesData.features)) {
        // Filtrar rotas duplicadas
        const uniqueRoutes = uniqueFeatures(routesData.features)
        // Ordenar por data (mais novos primeiro) se houver campo de data
        uniqueRoutes.sort((a, b) => {
          const dateA = a.properties.data_criacao || a.properties.createdAt || a.properties.created_at
          const dateB = b.properties.data_criacao || b.properties.createdAt || b.properties.created_at
          if (dateA && dateB) {
            return new Date(dateB) - new Date(dateA)
          }
          // Se não houver data, manter ordem original
          return 0
        })
        setAllRoutes(uniqueRoutes)
      } else {
        console.warn("GeoJSON sem features válidas:", routesData)
        setAllRoutes([])
      }
    }
  }, [routesData, routesDataIsLoaded])
  const baseBread = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Todas as Rotas", path: "/rotas" },
  ]
  const alternateBread = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Quiz", path: "/quiz" },
    {
      label: "Rotas encontradas",
      path: "/rotas-encontradas",
      state: { from: "rotas-encontradas" },
    },
    { label: "Todas as Rotas", path: "/rotas" },
  ]

  return (
    <Container>
      <BreadcrumbComponent
        bread={fromPage === "rotas-encontradas" ? alternateBread : baseBread}
        contrast={true}
      />
      <HeroSectionContainer>
        <HeroSectionContent>
          <h2>
            {
              "Aqui você pode conferir todas as rotas disponíveis para pedalar em Fortaleza"
            }
          </h2>
        </HeroSectionContent>
        <HeroSectionImage
          className={"about-hero-image"}
          src={WhereFindImage}
          alt=""
        />
      </HeroSectionContainer>
      <ContentWrapper>
        {!routesDataIsLoaded ? (
          <div style={{ textAlign: 'center', padding: '2rem', width: '100%' }}>
            Carregando rotas...
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '2rem', width: '100%', color: '#e74c3c' }}>
            <h3>Nenhuma rotas disponível no momento.</h3>
            <p style={{ fontSize: '0.95rem', marginTop: '1rem' }}>
              Tenter novamente mais tarde!
            </p>
          </div>
        ) : allRoutes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', width: '100%' }}>
            Nenhuma rota disponível no momento. Por favor, faça upload de um GeoJSON na área administrativa.
          </div>
        ) : (
          allRoutes.map((route, index) => {
            const routeId = route.properties.id || route.properties.fid
            const routeProperties = route.properties
            const routeName = routeProperties.rota?.replaceAll("_", " ") || "Rota sem nome"
            const image = routeProperties.fotos?.[0] || null
            const durationInMinutes = Math.round((route.properties.dist_total / 1000) / 15 * 60)

            return (
              <RouteCard
                key={`route-${routeId}-${index}`}
                image={image}
                routeName={routeName}
                distance={route.properties.dist_total}
                duration={durationInMinutes}
                incline={route.properties.inclinacao?.toFixed(2) || "0.00"}
                hasButton={true}
                onClick={() => {
                  navigate(`./${routeId}`, { state: { from: fromPage } })
                }}
              />
            )
          })
        )}
      </ContentWrapper>
    </Container>
  )
}
