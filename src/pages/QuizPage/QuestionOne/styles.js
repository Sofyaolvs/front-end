import styled from "styled-components"
import { display3Text, slideAnimation } from "../../../style/global.js"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions.jsx"

export const QuestionOneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  user-select: none;
  animation: ${slideAnimation} 0.5s ease-in-out;
`

export const QuestionOneContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  @media (max-width: 1200px) {
    max-width: 800px;
  }
`

export const CircleArrowButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isActive ? "var(--secondary-orange)" : "var(--neutral-gray)"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.8);
  }

  @media (max-width: 840px) {
    width: 42px;
    height: 42px;
  }
`

export const ArrowButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 400px;
  background-color: white;
  align-items: center;
`

export const ArrowIcon = styled.img`
  user-select: none;
  @media (max-width: 840px) {
    width: 13px;
    height: 21px;
  }
`

const getFilter = (props) => {
  return props.$actualOption === props.$emojiId
    ? "none"
    : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(80%)"
}

const getOpacity = (props) => {
  if (props.$actualOption === props.$emojiId) {
    return 1
  } else if (Math.abs(props.$actualOption - props.$emojiId) === 1) {
    return 0.3
  } else {
    return 0.2
  }
}

const isMobile = window.innerWidth <= 768
const getTransform = (props) => {
  const distance = Math.abs(props.$actualOption - props.$emojiId)
  if (props.$actualOption === props.$emojiId) {
    return "scale(1)"
  } else if (distance === 1) {
    return "scale(0.7)"
  } else if (distance === 2) {
    if (props.$actualOption < props.$emojiId) {
      return isMobile ? "scale(0.5)" : "translateX(-60px) scale(0.5)"
    } else {
      return isMobile ? "scale(0.5)" : "translateX(60px) scale(0.5)"
    }
  } else {
    return "scale(0.5)"
  }
}

export const EmojiWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; /* Adiciona o background aqui */
  transition: all 0.3s;
  transform: ${getTransform};
  border-radius: 50%;
`

export const EmojiImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: 100%;
  max-height: 250px;
  min-width: 100px;
  min-height: 100px;
  filter: ${getFilter};
  opacity: ${getOpacity};
  transition: all 0.3s;
`

export const QuestionOneLabel = styled.p`
  ${display3Text};
  font-size: var(--display3-font-size);
  font-weight: 650;
  @media (max-width: 840px) {
    font-size: 22px;
  }
`
