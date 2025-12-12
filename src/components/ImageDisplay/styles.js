import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 94rem;
  /* max-width: 1440px; */
  .route-details-image-custom-next,
  .route-details-image-custom-prev {
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    user-select: none;
    border: none;
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: 10;
    @media (max-width: 840px) {
      width: 42px;
      height: 42px;
    }
  }
  .route-details-image-custom-next {
    right: -32px; /* Posicione como necessário */
    @media (max-width: 840px) {
      right: -21px;
    }
    top: 50%;
    transform: translateY(-50%);
  }
  .route-details-image-custom-prev {
    left: -32px;
    @media (max-width: 840px) {
      left: -21px;
    }
    top: 50%;
    transform: translateY(-50%);
  }
  .route-details-image-custom-next:hover,
  .route-details-image-custom-prev:hover {
    cursor: pointer;
  }
`
export const Image = styled.img`
  width: 21.5rem; /* 344px */
  /* height: 100%; */
  height: 15.5rem; /* 248px */
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
  display: block;
  background-color: #f0f0f0;
`
export const PaginationDiv = styled.div`
  .route-details-image-custom-pagination {
    display: none;
  }
`

export const Button = styled.button`
  background-color: ${(props) =>
    props.$isActive ? "var(--secondary-orange)" : "var(--neutral-gray)"};
`
export const ArrowIcon = styled.img`
  user-select: none;
  @media (max-width: 840px) {
    width: 13px;
    height: 21px;
  }
`
