import styled from "styled-components"
import { body1Text, display3Text } from "../../style/global.js"

export const CardContainer = styled.div`
  width: 342px;
  height: 440px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1240px) {
    width: 300px;
    height: 400px;
  }

  @media (max-width: 840px) {
    width: 100%;
    max-width: 342px;
    height: 380px;
  }

  @media (max-width: 375px) {
    height: 340px;
  }
`

export const CardImageBackground = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover;
  position: absolute;
`

export const OverlayBg = styled.div`
  background: linear-gradient(
    to top,
    rgba(7, 27, 36, 0.8) 25%,
    rgba(1, 12, 17, 0.2) 70%
  );
  width: 100%;
  height: 100%;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover;
`

export const CardContent = styled.div`
  width: 92%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 4;
  background-color: transparent;
`

export const CardTitle = styled.h2`
  ${display3Text};
  color: white;
  margin: 0 10px 1rem 10px;
  text-align: center;

  @media (max-width: 840px) {
    font-size: 1.5rem;
    margin: 0 10px 0.75rem 10px;
  }
`

export const RouteInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const IconInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`

export const IconText = styled.p`
  ${body1Text};
  color: white;
  font-weight: bold;

  @media (max-width: 840px) {
    font-size: 0.9rem;
  }
`
