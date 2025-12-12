import styled from "styled-components"
import { body1Text } from "../../style/global.js"

export const RouteTypeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`

export const RouteTypeButtonStyled = styled.button`
  width: ${(props) =>
    props.$sizeInPixels ? `${props.$sizeInPixels}px` : "132px"};
  height: ${(props) =>
    props.$sizeInPixels ? `${props.$sizeInPixels}px` : "132px"};
  transition: 0.3s;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "white" : "#f5f5f5")};
  border: 5px solid
    ${(props) => (props.$isActive ? "var(--primary-green)" : "#9e9e9e")};

  &:hover {
    cursor: pointer;
  }
`

export const RouteTypeIcon = styled.img`
  height: ${(props) =>
    props.$iconSizeInPixels ? `${props.$iconSizeInPixels}px` : "70px"};
  width: ${(props) =>
    props.$iconSizeInPixels ? `${props.$iconSizeInPixels}px` : "70px"};
  transition: 0.3s;
  filter: ${(props) =>
    props.$isActive
      ? "none"
      : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(1%)"};
`

export const RouteTypeLabel = styled.p`
  ${body1Text};
  color: var(--neutral-black);
  font-weight: 700;

  @media (max-width: 840px) {
    font-size: 12px;
  }
`
