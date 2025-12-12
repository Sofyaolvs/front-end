import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

export const SectionsContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 90rem; /* 1440px */
  gap: 4rem;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const CirclePhotos = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const ColumnReverserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
  }
`

export const TextsAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.3rem; /* 336px */
  align-items: ${(props) =>
    props?.$center === true ? "center" : "flex-start"};
  text-align: ${(props) => (props?.$center === true ? "center" : "left")};
  align-self: ${(props) => (props?.$center === true ? "center" : "unset")};

  @media (max-width: 1240px) {
    max-width: 36rem;
  }
`

export const DividerLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: var(--neutral-light-gray);
  margin: 2rem 0;
`

export const SeparatorDiv = styled.div`
  width: 100%;
  height: ${(props) => props?.$height || "5rem"};
`
