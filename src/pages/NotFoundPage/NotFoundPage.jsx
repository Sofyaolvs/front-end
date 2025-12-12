import React, { useEffect, useState } from "react"
import {
  ButtonContainer,
  ButtonPlaceholder,
  Container,
  Description,
  InnerContainer,
  Title,
  PageNotFoundImageContainer,
} from "./style"
import { Button } from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"
import { useAcessibilityContext } from "../../contexts/AcessibilityContext"

import { useWindowDimensions } from "../../hooks/useWindowDimensions"

import PageNotFoundImage from "../../assets/erroIcon.svg"

import { texts } from "../../resources/texts"

const NotFoundPage = () => {
  const { currentPage, setCurrentPage } = useAcessibilityContext()
  const navigate = useNavigate()
  const [containerHeight, setContainerHeight] = useState("100vh")

  const handleRedirect = () => {
    setCurrentPage("/")
    navigate("/")
  }

  useEffect(() => {
    const adjustHeight = () => {
      const accessibilityBarHeight =
        document.getElementById("acessibilityBar")?.offsetHeight || 0
      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0
      const newHeight = `calc(100svh - ${accessibilityBarHeight}px - ${navbarHeight}px)`
      setContainerHeight(newHeight)
    }

    adjustHeight()
    window.addEventListener("resize", adjustHeight)

    return () => {
      window.removeEventListener("resize", adjustHeight)
    }
  }, [])

  const { isMobile } = useWindowDimensions()

  return (
    <Container style={{ height: containerHeight }}>
      <InnerContainer>
        <Title>{texts.pages.notFoundTexts.heroHeader}</Title>
        <Description>
          {texts.pages.notFoundTexts.heroSubheader.slice(0, 76)}
          <strong>
            {texts.pages.notFoundTexts.heroSubheader.slice(-71, 90)}
          </strong>
          {texts.pages.notFoundTexts.heroSubheader.slice(90)}
        </Description>
        <PageNotFoundImageContainer $isMobile={isMobile}>
          <img src={PageNotFoundImage} alt="Página não encontrada" />
        </PageNotFoundImageContainer>
        <ButtonContainer>
          <Button
            placeholder={texts.buttonsTexts[4]}
            onClick={handleRedirect}
          />
        </ButtonContainer>
      </InnerContainer>
    </Container>
  )
}

export default NotFoundPage
