import styled from "styled-components"
import { body1Text, headlineText } from "../../style/global.js"
import { Link } from "react-router-dom"

export const FooterContainer = styled.div`
  background-color: var(--primary-green);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  padding: 40px 60px;
  max-width: 91rem;
  gap: 32px;

  @media (max-width: 1240px) {
    padding: 40px 40px;
    flex-direction: column;
  }
  @media (max-width: 375px) {
    align-items: flex-start;
    padding: 40px 32px;
  }
`

export const ContactTitle = styled.h2`
  ${headlineText};
  color: var(--neutral-white);
  font-weight: 700;
`

export const DescriptionTitle = styled.h2`
  ${body1Text};
  color: var(--neutral-white);
  font-weight: 400;
`

export const DescriptionInfo = styled.p`
  ${body1Text};
  color: var(--neutral-white);
  font-weight: 700;
`

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1240px) {
    align-items: center;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

export const ContactDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
  @media (max-width: 1240px) {
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
`

export const ContactDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;

  @media (max-width: 1240px) {
    /* align-items: center; */
  }
`

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 1240px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center; 
    align-items: center; 
    row-gap: 2.5rem;
    /* border-top: 1px solid var(--neutral-white); */
    /* padding-top: 32px; */
  }
`

export const LinksContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  text-decoration: none;
`

export const Icon = styled.img``

export const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 10px;
`

export const BoraLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 260px;
`

export const AmcLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 180px;
`

export const CitinovaLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 245px;
`

export const PrefeituraLogo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 280px;
`



export const IconRoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  max-height: 40px;
  aspect-ratio: 1 / 1;

  background-color: var(--secondary-orange);
  color: var(--neutral-white);
  border-radius: 100%;
`
