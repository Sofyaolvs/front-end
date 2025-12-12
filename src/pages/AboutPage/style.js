import styled from "styled-components"
import {
  body1Text,
  displayText,
  display2Text,
  headlineText,
} from "../../style/global"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  row-gap: 4rem; //64px;
  padding-bottom: 12.5rem;
  @media screen and (max-width: 840px) {
    row-gap: 2.5rem;
    padding-bottom: 4rem;
  }
`
export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 789px;
  object-fit: cover;
  object-position: 50% ${-window.innerWidth / 10 + 144}px;

  @media screen and (max-width: 840px) {
    object-position: 50% ${-window.innerWidth / 10 + 144}px;

    row-gap: 24px;
  }
`
export const FullScaleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 952px; */
  row-gap: 1.5rem; //24px;
  overflow: hidden;

  @media screen and (max-width: 450px) {
    /* width: 180%; */
    /* max-height: 353px; */
    object-position: 50px -100px;
  }
`
export const FullScaleImage = styled.img`
  width: 100%;
  max-height: ${516}px;
  object-fit: cover;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    max-height: 402px;
  }

  @media screen and (max-width: 1248px) {
    width: 140%;
  }
  @media screen and (max-width: 840px) {
    width: 160%;
    object-position: 30%;
  }
  @media screen and (max-width: 450px) {
    width: 180%;
    max-height: 353px;
    object-position: -150px -100px;
  }
`

export const IlustrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 952px;
  @media screen and (min-width: 840px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  row-gap: 1.5rem; //24px;
`

export const IlustrationImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 420px;
  min-height: 194px;
  object-fit: cover;
  object-position: center;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 952px;
  row-gap: 1.5rem; //24px;
  padding: 0 1rem;
`

export const Title = styled.h1`
  ${displayText};
  color: var(--neutral-black);
  font-weight: 700;

  @media screen and (max-width: 840px) {
    ${headlineText};
  }
`

export const InformationTitle = styled.h2`
  ${display2Text};
  color: var(--neutral-black);
  font-weight: 500;
  @media screen and (max-width: 840px) {
    ${headlineText};
  }
`

export const InformationText = styled.p`
  ${body1Text};
  color: var(--neutral-black);
  font-weight: 400;
`
