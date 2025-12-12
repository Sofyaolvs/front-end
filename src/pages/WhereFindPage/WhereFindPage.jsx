import { useLayersContext } from "../../contexts/LayersContext.jsx"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import FortalezaMap from "../../components/FortalezaMap/FortalezaMap.jsx"
import { Button } from "../../components/Button/Button.jsx"
import {
  Container,
  MapBox,
  HeroSectionImage,
  HeroSectionContainer,
  HeroSectionContent,
  BottomSectionContainer,
  SectionTextsContent,
  FivePhotosGrid,
  WhereToFindTitle,
  WhereToFindDescription,
} from "./styles.js"
import { DisplayText2, Body1Text } from "../../style/texts.js"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import WhereFindImage from "../../assets/where-find-header.png"
import grade3Fotos from "../../assets/grade_3fotos.png"
import grade2Fotos from "../../assets/grade_2fotos.png"


import { texts } from "../../resources/texts.js"

export default function WhereFindPage() {
  const { isMobile, isTablet } = useWindowDimensions()
  const {layersData, fetchLayersData, layersDataIsLoaded, formattedLayersData } = useLayersContext()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const runOnce = useRef(false)

  useEffect(() => {
    if (!runOnce.current) handleFetchLayersData()
    return () => (runOnce.current = true)
  }, [])

  async function handleFetchLayersData() {
    setIsLoading(true)
    if (layersData.length<=1) {
      console.log("fetching in WhereFindPage");
      await fetchLayersData()
    }
    setIsLoading(false)
  }
  function handleGoToAboutPage() {
    navigate("/sobre")
  }

  return (
    <Container $isTablet={isTablet}>
      <HeroSectionContainer $isTablet={isTablet}>
        <HeroSectionContent $isTablet={isTablet}>
          <WhereToFindTitle $isTablet={isTablet}>
            {texts.pages.whereToFindTexts.heroHeader}
          </WhereToFindTitle>
          <WhereToFindDescription>
            {texts.pages.whereToFindTexts.heroSubheader}
          </WhereToFindDescription>
        </HeroSectionContent>
        <HeroSectionImage
          className={"about-hero-image"}
          src={WhereFindImage}
          alt=""
        />
      </HeroSectionContainer>
      <MapBox loading={isLoading && !layersDataIsLoaded ? "true" : undefined}>
        {isLoading && !layersDataIsLoaded ? (
          <p>Carregando...</p>
        ) : (
          <FortalezaMap layersData={formattedLayersData} />
        )}
      </MapBox>
      <BottomSectionContainer>
        <SectionTextsContent $center>
          <DisplayText2>
            {texts.pages.whereToFindTexts.connectingFortaleza}
          </DisplayText2>
          <Body1Text
            style={{
              marginTop: "8px",
              ...(isTablet ? { textAlign: "left", paddingLeft: "16px" } : {}),
            }}
          >
            {texts.pages.whereToFindTexts.connectingFortalezaText}
          </Body1Text>
          <Button
            placeholder={"Sobre o projeto"}
            onClick={handleGoToAboutPage}
            style={{
              marginTop: "1rem",
              zIndex: 3,
            }}
          />
        </SectionTextsContent>

        <FivePhotosGrid
          src={isMobile ? grade2Fotos : isTablet ? grade3Fotos : grade3Fotos}
          alt="Sobre o projeto"
          style={{
            transform: !isTablet ? "translateY(-120px)" : "unset",
          }}
        />
      </BottomSectionContainer>
    </Container>
  )
}
