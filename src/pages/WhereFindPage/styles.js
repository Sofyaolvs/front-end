import styled, { keyframes, css } from "styled-components"
import {
  body1Text,
  displayText,
  display2Text,
  titleText,
  display3Text,
} from "../../style/global"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: ${({ $isTablet }) => ($isTablet ? "2.5rem" : "7.5rem")};
  padding-bottom: calc(80px);
`
export const HeroSectionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  clip-path: ${({ $isTablet }) =>
    $isTablet
      ? "ellipse(180% 100% at 50% 0%);"
      : "ellipse(100% 100% at 0% 0%))"};
`
export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 262px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 840px) {
    object-position: center;
  }
`

export const LinkInputWrapper = styled.div`
  width: 28px;

  input {
    padding: 0.5rem 1.5rem !important;
  }
`
export const HeroSectionContent = styled.article`
  position: absolute;
  max-width: 1194px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--neutral-white);
  z-index: 1;
  padding: ${({ $isTablet }) => ($isTablet ? "0 1rem 0 1rem" : "0")};
`

export const WhereToFindTitle = styled.h2`
  ${({ $isTablet }) => ($isTablet ? `${display3Text}` : `${displayText}`)};
  line-height: ${({ $isTablet }) => ($isTablet ? `2.25rem` : `4rem`)};
`

export const WhereToFindDescription = styled.p`
  ${body1Text};
  font-weight: bold;
  text-align: center;
  max-width: 708px;
`

// Definindo a animação
const waveAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

// Definindo o componente com animação condicional
export const MapBox = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  min-height: 224px;
  max-width: 1440px;
  border-radius: 8px;
  height: 90%;
  max-height: 740px;
  color: var(--secondary-orange);
  font-weight: 700;
  ${titleText}
  p {
    font-size: 28px;
    @media screen and (max-width: 840px) {
      font-size: 22px;
    }
  }
  background: linear-gradient(
    90deg,
    rgba(211, 211, 211, 0.5) 25%,
    lightgrey 50%,
    rgba(211, 211, 211, 0.5) 75%
  );
  background-size: 200% 100%;
  ${({ loading }) =>
    loading &&
    css`
      animation: ${waveAnimation} 2s linear infinite;
    `}
`

export const BottomSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
  }
`
export const SectionTextsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.3rem; /* 336px */
  align-items: ${(props) =>
    props?.$center === true ? "center" : "flex-start"};
  text-align: ${(props) => (props?.$center === true ? "center" : "left")};
  align-self: ${(props) => (props?.$center === true ? "center" : "unset")};

  @media (max-width: 1240px) {
    max-width: 36rem;
  }
`
export const FivePhotosGrid = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
