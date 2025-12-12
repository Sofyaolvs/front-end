import {
  HeroSectionContainer,
  HeroSectionContent,
  HeroSectionImage,
} from "../ContactPage/styles.js"
import WhereFindImage from "../../assets/where-find-header.png"
import {
  CirclePhotos,
  ColumnReverserContainer,
  Container,
  SeparatorDiv,
  TextsAndButtonContainer,
} from "../GlobalComponents.js"
import { QuizResultTitle } from "./styles.js"
import { RouteCard } from "../../components/RouteCard/RouteCard.jsx"
import { RoutesContainer, ResultContent } from "./styles.js"
import { useLocation, useNavigate } from "react-router-dom"
import { Body1Text, DisplayText2 } from "../../style/texts.js"
import { Button } from "../../components/Button/Button.jsx"
import grade2Fotos from "../../assets/grade_2fotos.png"
import grade3Fotos from "../../assets/grade_3fotos.png"
import grade5Fotos from "../../assets/grade_5fotos.png"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent"
import { texts } from "../../resources/texts.js"

export function QuizResultPage() {
  const { isTablet, isMobile } = useWindowDimensions()
  const location = useLocation()
  const bestRoutes =
    location.state?.bestRoutes ||
    JSON.parse(sessionStorage.getItem("bestRoutes")) ||
    []

  const navigate = useNavigate()

  const navigationHandler = (route) => {
    const routeId = route.route.properties.id || route.route.properties.fid
    navigate(`${routeId}`, {
      state: {
        route: route,
        from: "rotas-encontradas",
      },
    })
  }

  function renderBestRoutesCards() {
    return bestRoutes.map((route, index) => {
      console.log("route",route);
      let durationInMinutes = Math.round((route.route.properties.dist_total / 1000) / 15 * 60)
      return (
        <RouteCard
          key={index}
          //random image
          image={route.route.properties.fotos?.[0] || null}
          routeName={route.route.properties.rota || "Rota sem nome"}
          duration={durationInMinutes}
          distance={parseInt(route.route.properties.dist_total)}
          incline={route.route.properties.inclinacao?.toFixed(2) || "0.00"}
          hasButton={true}
          onClick={() => navigationHandler(route)}
        />
      )
    })
  }

  function goToAllRoutes() {
    navigate("/rotas-encontradas/rotas", {
      state: { from: "rotas-encontradas" },
    })
  }

  const bread = [
    { label: "Início", path: "/" },
    { label: "Pedale por Fortaleza", path: "/pedale-por-fortaleza" },
    { label: "Quiz", path: "/quiz" },
    { label: "Rotas encontradas", path: "/rotas-encontradas" },
  ]

  return (
    <Container>
      <BreadcrumbComponent bread={bread} contrast={true} />
      <ResultContent>
        <HeroSectionContainer>
          <HeroSectionContent>
            <QuizResultTitle $isTablet={isTablet}>
              Massa! Aqui estão algumas sugestões de rotas para você pedalar por
              Fortaleza
            </QuizResultTitle>
          </HeroSectionContent>
          <HeroSectionImage
            className={"about-hero-image"}
            src={WhereFindImage}
            alt=""
          />
        </HeroSectionContainer>
        <RoutesContainer>{renderBestRoutesCards()}</RoutesContainer>
        <ColumnReverserContainer>
          <TextsAndButtonContainer $center>
            <DisplayText2>
              {texts.pages.rideFortalezaTexts.seeFortalezaHeader}
            </DisplayText2>
            <Body1Text
              style={{
                marginTop: "8px",
                ...(isTablet ? { textAlign: "left", paddingLeft: "16px" } : {}),
              }}
            >
              {texts.pages.rideFortalezaTexts.seeFortalezaText}
            </Body1Text>
            <Button
              placeholder={texts.buttonsTexts[6]}
              onClick={goToAllRoutes}
              style={{
                marginTop: "1rem",
                zIndex: 3,
              }}
            />
          </TextsAndButtonContainer>
          <CirclePhotos
            src={isMobile ? grade2Fotos : isTablet ? grade3Fotos : grade5Fotos}
            alt="Onde encontrar"
            style={{
              transform: !isTablet ? "translateY(-120px)" : "unset",
            }}
          />
        </ColumnReverserContainer>
        <SeparatorDiv style={{ ...(isTablet ? { height: "0px" } : {}) }} />
      </ResultContent>
    </Container>
  )
}
