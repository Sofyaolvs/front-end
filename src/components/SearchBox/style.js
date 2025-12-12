import styled, { keyframes, css } from "styled-components"
import { body1Text } from "../../style/global"

export const openSearchBox = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  padding: 0.75rem 1.188rem;
  width: 100%;
  max-width: ${({ $isNav, $isWeb, $isExpanded }) =>
    $isNav ? ($isWeb && $isExpanded ? "32px" : "240px") : "720px"};
  height: ${({ $isMobile }) => ($isMobile ? "44px" : "36px")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-white);
  border-radius: 32px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--primary-green);
  border: ${({ $isExpanded }) =>
    $isExpanded ? "none" : "2px solid var(--primary-green)"};
  transition: ease-in-out 0.2s;
  animation: ${({ $isExpanded }) =>
      $isExpanded
        ? css`
            ${openSearchBox} 0.5s ease-in-out forwards
          `
        : "none"}
    0.3s ease-in-out;
  margin-bottom: 4px;
`

export const Button = styled.button`
  background-color: transparent;
  border: 0 solid transparent;
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
  outline: none;
  background-color: transparent !important;
  border-color: transparent !important;
  outline: none;
  background-color: transparent !important;
  border-color: transparent !important;
  margin-bottom:6px !important;
`

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Busque por algo...",
})`
  ${body1Text};
  color: var(--neutral-dark-gray);
  background-color: transparent;
  border: none;
  font-weight: 500;
  width: 100%;

  &::placeholder {
    font-weight: 400;
    line-height: 16px;
    text-align: justify;
    color: var(--neutral-dark-gray);
  }

  &:focus-visible {
    outline: none;
  }
`