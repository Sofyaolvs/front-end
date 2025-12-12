import {
  Container,
  CirclePhotos,
  SeparatorDiv,
  ColumnReverserContainer,
  TextsAndButtonContainer,
} from "../GlobalComponents.js"
import { ContentDivider } from "../SearchPage/style.js"
import { GenericMediaHeroSection } from "../../components/GenericMediaHeroSection/GenericMediaHeroSection.jsx"
import { useState } from "react"
import { HeroSectionImage, RoutesContainer } from "./styles.js"
import { Body1Text, DisplayText2 } from "../../style/texts.js"
import { Button } from "../../components/Button/Button.jsx"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import { useNavigate } from "react-router-dom"

import grade2Fotos from "../../assets/grade_2fotos.png"
import grade3Fotos from "../../assets/grade_3fotos.png"
import grade5Fotos from "../../assets/grade_5fotos.png"
import garotaPedalando from "../../assets/mocas-pedalando.png"
import { DecorativeCarousel } from "../../components/DecorativeCarousel/DecorativeCarousel.jsx"
import maeEFilho from "../../assets/mae_filho.png"

import { texts } from "../../resources/texts.js"

export function CycleAroundFortalezaPage() {
  const { isTablet, isMobile } = useWindowDimensions()
  const navigate = useNavigate()

  function handleGoToQuiz() {
    navigate("/quiz")
  }

  function handleGoToAllRoutesPage() {
    navigate("/rotas", { state: { from: "pedale-por-fortaleza" } })
  }

  function handleGoToWhereToFindPage() {
    navigate("/onde-encontrar")
  }

  return (
    <Container>
      <GenericMediaHeroSection
        title={texts.pages.rideFortalezaTexts.heroHeader}
        description={
          <>
            {texts.pages.rideFortalezaTexts.heroSubheader[0]}
            <br />
            {texts.pages.rideFortalezaTexts.heroSubheader[1]}
          </>
        }
        buttonLabel={texts.buttonsTexts[5]}
        onClick={handleGoToQuiz}
      >
        <HeroSectionImage src={garotaPedalando} alt="Garota pedalando" />
      </GenericMediaHeroSection>
      <SeparatorDiv />
      <TextsAndButtonContainer $center>
        <DisplayText2>{texts.pages.rideFortalezaTexts.routes[0]}</DisplayText2>
        <Body1Text
          style={{
            ...(isMobile && {
              paddingLeft: "16px",
              paddingRight: "16px",
              textAlign: "left",
            }),
            marginTop: "8px",
          }}
        >
          {texts.pages.rideFortalezaTexts.routes[1].slice(0, -12)}
          {!isMobile && <br />}
          <strong style={{ color: "var(--neutral-dark-gray)" }}>
            {texts.pages.rideFortalezaTexts.routes[1].slice(-12)}
          </strong>
        </Body1Text>
        <Button
          placeholder={texts.buttonsTexts[6]}
          onClick={handleGoToAllRoutesPage}
          style={{
            marginTop: "1rem",
            zIndex: 3,
          }}
        />
      </TextsAndButtonContainer>
      {!isMobile && <SeparatorDiv />}
      <DecorativeCarousel />

      {!isMobile && <SeparatorDiv $height={!isTablet ? 10 : 3} />}
      {isMobile && (
        <div
          style={{ paddingLeft: "16px", paddingRight: "16px", width: "100%" }}
        >
          <ContentDivider style={{ marginTop: "36px", marginBottom: "40px" }} />
        </div>
      )}
      {!isMobile && <SeparatorDiv />}
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
            placeholder={"Onde encontrar"}
            onClick={handleGoToWhereToFindPage}
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
      <SeparatorDiv
        $height={!isTablet ? 1 : 10}
        style={{ marginBottom: isTablet ? "60px" : "" }}
      />
    </Container>
  )
}
