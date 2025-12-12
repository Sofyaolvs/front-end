import React from "react"
import {
  AcessibilityBarContainer,
  ContrastImg,
  Divider,
  FontSizesContainer,
  FuncionalitiesContainer,
  Funcionality,
  StyledLink,
} from "./style"
import {
  anchorsModules,
  externalLinksModules,
} from "../../utils/modules/acessibilityModules"
import { useNavigate, useLocation } from "react-router-dom"
import { useAcessibilityContext } from "../../contexts/AcessibilityContext"

const AcessibilityBar = ({ isMobile, isTablet }) => {
  const navigate = useNavigate()
  const { toggleTheme, increaseFont, decreaseFont, resetFont } =
    useAcessibilityContext()

  const handleScrollToElement = (link) => {
    const element = document.getElementById(link)
    if (element ) {
       element.scrollIntoView({ behavior: "smooth" })
       if (link === "buscar") {
        navigate("/busca/")
      }
    }
    
  }

  return (
    <AcessibilityBarContainer $isMobile={isMobile} id="acessibilityBar">
      {!isMobile ? (
        <>
          <FuncionalitiesContainer $isMobile={isMobile} $isTablet={isTablet}>
            {anchorsModules.map((anchor, index) => (
              <Funcionality
                key={index}
                $isSize={false}
                onClick={() => handleScrollToElement(anchor.link)}
              >
                {anchor.title}
              </Funcionality>
            ))}

            <Divider>|</Divider>
            <ContrastImg onClick={toggleTheme} $isMobile={isMobile} />
            <FontSizesContainer>
              <Funcionality $isSize={true} onClick={decreaseFont}>
                A-
              </Funcionality>
              <Funcionality $isSize={true} onClick={resetFont}>
                A
              </Funcionality>
              <Funcionality $isSize={true} onClick={increaseFont}>
                A+
              </Funcionality>
            </FontSizesContainer>
          </FuncionalitiesContainer>

          <FuncionalitiesContainer $isMobile={isMobile} $isTablet={isTablet}>
            {externalLinksModules.map((externalLink, index) => (
              <StyledLink key={index} href={externalLink.link} target="_blank">
                {externalLink.title}
              </StyledLink>
            ))}
          </FuncionalitiesContainer>
        </>
      ) : (
        <FuncionalitiesContainer $isMobile={isMobile} $isTablet={isTablet}>
          <p>Acessibilidade:</p>
          <ContrastImg onClick={toggleTheme} $isMobile={isMobile} />
          <FontSizesContainer>
            <Funcionality $isSize={true} onClick={decreaseFont}>
              A-
            </Funcionality>
            <Funcionality $isSize={true} onClick={resetFont}>
              A
            </Funcionality>
            <Funcionality $isSize={true} onClick={increaseFont}>
              A+
            </Funcionality>
          </FontSizesContainer>
        </FuncionalitiesContainer>
      )}
    </AcessibilityBarContainer>
  )
}

export default AcessibilityBar
