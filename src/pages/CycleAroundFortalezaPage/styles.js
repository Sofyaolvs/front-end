import styled from "styled-components"

export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 789px;
  object-fit: cover;
  object-position: 50% 65%;

  @media screen and (max-width: 1240px) {
    transform: scale(1.5) translateY(-50px);
    object-position: 70% 50%;
  }

  @media screen and (max-width: 840px) {
    transform: scale(1.1) translateY(-15px);
    object-position: 40%;
  }
`

export const RoutesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  max-width: 1440px;
  height: 440px;
`
