import styled from "styled-components"
import { body1Text } from "../../style/global.js"

export const StyledButton = styled.button`
  ${body1Text}
  padding: 18px 16px;
  width: 100%;
  max-width: 343px;
  border: none;
  border-radius: 32px;
  background-color: ${(props) =>
    props.$backgroundColor || "var(--secondary-orange)"};
  color: ${(props) => props.$placeholderColor || "var(--neutral-white)"};
  font-weight: 700;
  font-size: var(--body1-font-size);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
  }

  &:active {
    transform: scale(0.95);
  }
`
