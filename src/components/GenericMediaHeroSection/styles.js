import styled from "styled-components"

export const HeroSectionRadius = styled.div`
  width: 100%;
  height: 689px;

  @media (max-width: 840px) {
    height: 465px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  clip-path: ellipse(100% 100% at 50% 0%);

  @media (max-width: 1240px) {
    clip-path: unset;
    border-radius: 0% 0% 150% 150%/0% 0% 10% 10%;
  }
`

export const HeroSectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 840px) {
    height: 465px;
  }
  object-fit: cover;
  object-position: center;
`

export const HeroSectionVideo = styled.video`
  width: 100%;
  height: 140%;
  object-fit: cover;
  object-position: center 50%;
`

export const HeroSectionGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    to right,
    rgba(7, 27, 36, 0.9),
    rgba(1, 12, 17, 0.1)
  );

  @media (max-width: 1240px) {
    background: linear-gradient(
      to top,
      rgba(7, 27, 36, 0.9),
      rgba(1, 12, 17, 0.1)
    );
    border-radius: 0% 0% 150% 150%/0% 0% 10% 10%;
  }
`

export const HeroSectionContent = styled.div`
  position: absolute;
  z-index: 3;
  width: 90%;
  max-width: 90rem; // 1440px
  transform: translateY(-30px);

  @media (max-width: 1240px) {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 10px;
  }
`

export const HeroSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  gap: 1rem;

  @media (max-width: 1240px) {
    align-items: center;
    text-align: center;
    max-width: 22rem;
    min-width: 21.688rem;
  }
`
