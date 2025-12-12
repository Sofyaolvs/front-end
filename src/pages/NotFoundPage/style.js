import styled from "styled-components"
import { body1Text, displayText } from "../../style/global"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  min-height: 408px;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  max-width: 712px;
  text-align: center;
`

export const Title = styled.h1`
  ${displayText};
  color: var(--neutral-black);
  font-weight: 700;

  @media screen and (max-width: 840px) {
    font-size: var(--headline-font-size);
  }
`

export const Description = styled.p`
  ${body1Text};
  color: var(--neutral-dark-gray);
  @media screen and (max-width: 640px) {
    text-align: left;
  }
`

export const ButtonPlaceholder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  max-width: 343px;
  padding: 18px 50px;
  border-radius: 8px;
  background-color: var(--secondary-orange);
  color: var(--neutral-white);
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 66px;
  Button {
    background-color: var(--secondary-orange);
  }
`

export const PageNotFoundImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100%;
  img {
    width: 100%;
    max-width: ${({ $isMobile }) => ($isMobile ? "240px" : "320px")};
    height: auto;
    align-self: center;
  }
`
