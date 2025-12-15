import styled, { keyframes, css } from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: ${({ $isTablet }) => ($isTablet ? "2.5rem" : "7.5rem")};
  padding-bottom: calc(80px);
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`