import styled, { keyframes, css }  from "styled-components"
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
  gap: 1.5rem;
  padding-bottom: calc(4rem);
`
export const HeroSectionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  clip-path: ellipse(100% 100% at 50% 0%);
  flex-direction: column;
`
export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 242px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 840px) {
    object-position: center;
    min-height: 192px;
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
`

export const RouteTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  background-color: transparent !important;
`

export const RouteDetailTitle = styled.h2`
  ${display2Text}
  @media screen and (max-width: 840px) {
    ${display3Text}
  }
`
export const RouteDetailDescription = styled.p`
  ${body1Text};
  width: 100%;
  max-width: ${({ $isTablet }) => ($isTablet ? "343px" : "708px")};
  text-align: center;
  font-weight: ${({ $isTablet }) => ($isTablet ? "400" : "600")};
  @media screen and (max-width: 840px) {
    display: none;
  }

`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  /* gap: 157px; */

  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 32px;
    border-radius: 8px;
  }
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

export const MapBox = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $isTablet }) => ($isTablet ? "100%" : "90%")};
  min-height: 224px;
  max-width: 1440px;
  border-radius: 8px;
  height: 90%;
  max-height: 740px;
  color: var(--secondary-orange);
  font-weight: 700;
  #MapContainer {
    border-radius: 8px;
  }
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

export const IconInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  img {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 360px) {
    gap: 0.25rem;
    img {
      width: 22px;
      height: 22px;
    }
  }
`

export const IconText = styled.span`
  ${titleText};
  font-weight: bold;

  line-height: ${({ $isTablet }) => ($isTablet ? "28px" : "56px")};
  @media screen and (max-width: 360px) {
    font-size: 20px;
  }
`

export const TopInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 8px;
`

export const HorizontalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 394px;
`
export const MainContent = styled.main`
  width: 100%;
  max-width: 952px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const AboutSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  h2 {
    width: 100%;
    ${display2Text}
    font-size: ${({ $isTablet }) =>
      $isTablet ? `${display3Text}` : `${display2Text}`};
    font-weight: 700;
  }
  p {
    ${body1Text}
    width: 100%;
  }
`
export const TuristicSpotsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  line-height: 24px;
`
export const TuristicSpotsItem = styled.div`
  ${body1Text}
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;

  strong {
  }

  p {
  }
`

export const TouristAttractionTitle = styled.h3`
  ${titleText}
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 0.8rem;
`

export const TouristAttractionDescription = styled.p`
  ${body1Text}
  line-height: 1.5rem;
`

export const TuristicSpotsTitle = styled.h2`
  ${display2Text}
  font-weight: 700;
  line-height: 3.25rem;
  font-size: ${({ $isTablet }) =>
    $isTablet ? `${display3Text}` : `${display2Text}`};
`

export const TouristAttractionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`
export const BairrosRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  /* margin-bottom: 1.5rem; */

  span {
    padding-right: 8px;

    &:not(:last-child)::after {
      content: ",";
      /* padding-left: 8px; Espaço entre o texto e a vírgula */
    }
  }
`;

export const BairroTextStrong =styled.strong`
${body1Text}
`

export const ImageSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  line-height: 24px;
`
export const ImageTitle = styled.h2`
  ${display2Text}
  font-weight: 700;
  line-height: 3.25rem;
  font-size: ${({ $isTablet }) =>
    $isTablet ? `${display3Text}` : `${display2Text}`};
`