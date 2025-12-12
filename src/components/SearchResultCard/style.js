import { styled, keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { body1Text, headlineText, label1Text } from "../../style/global.js"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`

export const TitleText = styled(Link)`
  ${headlineText};
  color: var(--primary-green);
  font-weight: 700;
  text-decoration: none;
  &::first-letter {
    text-transform: capitalize;
  }
`

export const BodyText = styled.div`
  ${body1Text};
  color: var(--neutral-dark-gray);
  font-weight: 400;
  line-height: 1.5rem;
  text-align: justify;
  margin-top: 32px;
`

export const DateAndTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  img {
    margin-right: 8px;
  }
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LabelDate = styled.h3`
  ${label1Text};
  font-weight: 600;
  color: var(--neutral-dark-gray);
`
export const LabelTag = styled.h3`
  ${label1Text};
  font-weight: 600;
  color: var(--neutral-dark-gray);
`

const waveAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

export const LoadingBlock = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 12rem;
  background: linear-gradient(
    90deg,
    rgba(211, 211, 211, 0.5) 25%,
    lightgrey 50%,
    rgba(211, 211, 211, 0.5) 75%
  );

  background-size: 200% 100%;
  animation: ${waveAnimation} 2s linear infinite;
`
