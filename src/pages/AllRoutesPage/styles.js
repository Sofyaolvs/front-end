import styled from "styled-components"
import { body1Text, displayText, display3Text } from "../../style/global"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 4rem;
  padding-bottom: calc(4rem);
  @media screen and (max-width: 840px) {
    gap: 1.25rem;
  }
`
export const HeroSectionContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  clip-path: ellipse(100% 100% at 50% 0%);
`
export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 840px) {
    object-position: center;
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

  h2 {
    ${displayText}
    text-align: center;
    @media screen and (max-width: 840px) {
      max-width: 323px;
    }
  }
  p {
    ${body1Text};
    max-width: 708px;
    text-align: center;
    font-weight: 600;
  }

  @media screen and (max-width: 840px) {
    h2 {
      ${display3Text}
    }
    p {
      ${body1Text};
      max-width: 349px;
      text-align: center;
      font-weight: 400;
    }
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1456px;
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`
