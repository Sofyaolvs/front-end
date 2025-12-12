import styled from "styled-components"
import { slideAnimation } from "../../style/global.js"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 64px;
  animation: ${slideAnimation} 0.5s ease-in-out;

  @media (max-width: 840px) {
    gap: 10px;
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 500px;
  position: relative;

  @media (max-width: 840px) {
    height: 300px;
    width: 300px;
  }
`

export const AnimationFrame = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100px;
  width: 95%;
`

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 840px) {
    font-size: 1.6rem;
  }
`

export const Description = styled.p`
  font-size: 1rem;
  margin: 0;
  width: 80%;
`
