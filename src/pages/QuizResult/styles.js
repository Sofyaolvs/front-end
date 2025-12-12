import styled from "styled-components"
import { slideAnimation } from "../../style/global.js"

export const QuizResultTitle = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 57px;
  padding: 0 30px 0 30px;
  margin-top: ${({ $isTablet }) => ($isTablet ? "0px;" : "4rem;")};
  margin-bottom: ${({ $isTablet }) => ($isTablet ? "0px;" : "20px;")};

  @media (max-width: 1240px) {
    font-size: 38px !important;
  }

  @media (max-width: 840px) {
    font-size: 28px !important;
  }
`

export const RoutesContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  width: 95%;
  max-width: 1440px;
`

export const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ $isTablet }) => ($isTablet ? "24px;" : "64px;")};
  width: 100%;
  animation: ${slideAnimation} 0.5s ease-in-out;
`
