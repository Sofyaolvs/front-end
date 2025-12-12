import React from "react"
import {
  IlustrationContainer,
  IlustrationImage,
  InformationContainer,
  InformationText,
  InformationTitle,
  PageContainer,
  HeroSectionImage,
  FullScaleImage,
  FullScaleImageContainer,
  Title,
} from "./style"
import AboutFullScaleImage from "../../assets/horla-do-mar-1.png"
import AboutImage from "../../assets/about-image-v2.png"
import { GenericMediaHeroSection } from "../../components/GenericMediaHeroSection/GenericMediaHeroSection.jsx"
import Ciclovia from "../../assets/ciclovia.png"

import { useWindowDimensions } from "../../hooks/useWindowDimensions.jsx"

import { texts } from "../../resources/texts.js"

const AboutPage = () => {
  const { isTablet } = useWindowDimensions()

  return (
    <PageContainer>
      <GenericMediaHeroSection
        title={texts.pages.aboutTexts.heroHeader}
        description={texts.pages.aboutTexts.heroSubheader}
      >
        <HeroSectionImage
          $isTablet={isTablet}
          className={"about-hero-image"}
          src={AboutImage}
          alt=""
        />
      </GenericMediaHeroSection>
      <InformationContainer>
        <Title>{texts.pages.aboutTexts.contentSection[0]}</Title>
        <InformationText>
          {texts.pages.aboutTexts.contentSection[1]}
          <br />
          <br />
          {texts.pages.aboutTexts.contentSection[2]}
          <br />
          <br />
          {texts.pages.aboutTexts.contentSection[3]}
        </InformationText>
      </InformationContainer>
      <InformationContainer>
        <InformationTitle>
          {texts.pages.aboutTexts.contentSection[4]}
        </InformationTitle>
        <InformationText>
          {texts.pages.aboutTexts.contentSection[5]}
        </InformationText>
      </InformationContainer>
      <FullScaleImageContainer>
        <FullScaleImage src={AboutFullScaleImage} alt="Ilustração" />
      </FullScaleImageContainer>
      <InformationContainer>
        <InformationTitle>
          {texts.pages.aboutTexts.contentSection[6]}
        </InformationTitle>
        <InformationText>
          {texts.pages.aboutTexts.contentSection[7]}
          <br />
          <br />
          {texts.pages.aboutTexts.contentSection[8]}
        </InformationText>
      </InformationContainer>
      <IlustrationContainer>
        <IlustrationImage src={Ciclovia} alt="Ilustração" />
      </IlustrationContainer>
      <InformationContainer>
        <InformationTitle>
          {texts.pages.aboutTexts.contentSection[9]}
        </InformationTitle>
        <InformationText>
          {texts.pages.aboutTexts.contentSection[10]}
          <br />
          <br />
          {texts.pages.aboutTexts.contentSection[11]}
        </InformationText>
      </InformationContainer>
    </PageContainer>
  )
}

export default AboutPage