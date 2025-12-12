import styled from "styled-components"
import { slideAnimation } from "../../../style/global.js"

export const QuestionTwoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 28px 64px;
  align-items: center;
  animation: ${slideAnimation} 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 14px 20px;
  }
`
