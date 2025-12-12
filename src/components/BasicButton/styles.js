import styled, { keyframes } from "styled-components"
import { body1Text } from "../../style/global"
export const Button = styled.button`
  ${body1Text}
  width: 100%;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--neutral-white);
  border: none;
  border-radius: 32px;
  cursor: pointer;
  background-color: var(--secondary-orange);
  font-weight: 700;

`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Loader = styled.div`
  border: 4px solid ${({ $color }) => $color || "var(--secondary-light-orange)"}; /* Cor de fundo do círculo */
  border-top: 4px solid ${({ $color }) => $color || "var(--primary-green)"}; /* Cor do círculo animado */
  border-width: ${({ $borderWidth }) => `${$borderWidth}px` || "4px"};
  border-radius: 50%;
  width: ${({ $size }) => `${$size}px` || "24px"};
  height: ${({ $size }) => `${$size}px` || "24px"};
  animation: ${rotate} 0.8s ease-in-out infinite;

  /* Simulando o gradiente de cor */
  /* border-left-color: ${({ color }) =>
    color || "var(--neutral-light-gray)"}; */
  /* border-left-color: transparent; */
  /* border-right-color: transparent; */
  /* border-bottom-color: transparent; */
`
