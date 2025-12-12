import { SectionImage, HeroSectionVideo } from "./styles.js"

import maeFilho from "../../assets/mae_filho.png"
import grade5Fotos from "../../assets/grade_5fotos.png"
import grade3Fotos from "../../assets/grade_3fotos.png"
import grade2Fotos from "../../assets/grade_2fotos.png"

import { Button } from "../../components/Button/Button.jsx"
import { DisplayText2, Body1Text } from "../../style/texts.js"
import { GenericMediaHeroSection } from "../../components/GenericMediaHeroSection/GenericMediaHeroSection.jsx"
import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"
import {
  CirclePhotos,
  ColumnReverserContainer,
  Container,
  SectionContent,
  SectionsContainer,
  SeparatorDiv,
  TextsAndButtonContainer,
} from "../GlobalComponents.js"

import { ContentDivider } from "../SearchPage/style.js"

import { texts } from "../../resources/texts.js"

import { useNavigate } from "react-router-dom"

import homeVideoUrl from "../../assets/home-pedala.mp4"

const HomePage = () => {
  const { isTablet, isMobile } = useWindowDimensions()
  const navigate = useNavigate()

  function handleGoToCycleThroughFortalezaPage() {
    navigate("/quiz")
  }

  function handleGoToAboutPage() {
    navigate("/sobre")
  }

  function handleGoToWhereToFindPage() {
    navigate("/onde-encontrar")
  }

  return (
    <Container>
      <GenericMediaHeroSection
        title={
          <>
            {texts.pages.homeTexts.heroHeader.slice(0, 20)}
            <span className="orange-text">
              {texts.pages.homeTexts.heroHeader.slice(20, 28)}
            </span>
            {texts.pages.homeTexts.heroHeader.slice(28)}
          </>
        }
        description={texts.pages.homeTexts.heroSubheader}
        buttonLabel={texts.buttonsTexts[0]}
        onClick={handleGoToCycleThroughFortalezaPage}
      >
        <HeroSectionVideo loop muted playsInline autoPlay>
          <source src={homeVideoUrl} type="video/mp4" />
        </HeroSectionVideo>
      </GenericMediaHeroSection>

      <SeparatorDiv />

      <SectionsContainer>
        {!isTablet ? (
          <>
            <SectionContent style={{ marginBottom: "12.5rem" }}>
              <SectionImage src={maeFilho} alt="Crianças pedalando" />
              <TextsAndButtonContainer>
                <DisplayText2>
                  {texts.pages.homeTexts.contentSection[0]}
                </DisplayText2>
                <Body1Text  style={{ marginTop: "8px" }}>
                  {texts.pages.homeTexts.contentSection[1]}
                </Body1Text>
                <Button
                  placeholder={texts.buttonsTexts[1]}
                  onClick={handleGoToAboutPage}
                  style={{ marginTop: "1rem" }}
                />
              </TextsAndButtonContainer>
            </SectionContent>
          </>
        ) : (
          <TextsAndButtonContainer style={{ alignSelf: "center", gap: "24px" }}>
            <DisplayText2>
              {texts.pages.homeTexts.contentSection[0]}
            </DisplayText2>
            <SectionImage src={maeFilho} alt="Crianças pedalando" />
            <Body1Text style={{ marginTop: "8px" }}>
              {texts.pages.homeTexts.contentSection[1]}
            </Body1Text>
            <Button
              placeholder={texts.buttonsTexts[1]}
              onClick={handleGoToAboutPage}
              style={{ alignSelf: "center" }}
            />
          </TextsAndButtonContainer>
        )}
      </SectionsContainer>

      <SeparatorDiv $height={!isTablet ? 10 : 3} />
      {isMobile && (
        <div
          style={{ paddingLeft: "16px", paddingRight: "16px", width: "100%" }}
        >
          <ContentDivider style={{ marginTop: "28px", marginBottom: "40px" }} />
        </div>
      )}

      <ColumnReverserContainer>
        <TextsAndButtonContainer
          style={{
            ...(isMobile && {
              paddingLeft: "16px",
              paddingRight: "16px",
              textAlign: "left",
            }),
          }}
          $center
        >
          <DisplayText2 style={{ paddingLeft: 0 }}>
            {texts.pages.homeTexts.contentSection[2]}
          </DisplayText2>
          <Body1Text color={'--neutral-darker-gray'}  style={{ marginTop: "8px" }}>
            {texts.pages.homeTexts.contentSection[3]}
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
        style={{ marginBottom: isTablet ? "152px" : "" }}
      />
    </Container>
  )
}

export default HomePage
