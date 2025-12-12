import styled from "styled-components"

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

export const SectionImage = styled.img`
  width: 100%;
  max-width: 44rem; /* 704px */
  height: 100%;
  max-height: 23rem; /* 320px */
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
`

export const HeroSectionVideo = styled.video`
  width: 100%;
  height: 140%;
  object-fit: cover;
  object-position: center 50%;
`
