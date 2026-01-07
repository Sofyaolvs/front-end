export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 1440px; */

  .swiper {
    max-width: calc((24rem * 3) + (16px * 2)) !important;
    overflow: hidden;

    @media (max-width: 840px) {
      max-width: 100% !important;
    }
  }

  .swiper-wrapper {
    align-items: center;
  }

  .swiper-slide {
    width: auto !important;
    flex-shrink: 0;
  }

  .route-details-image-custom-next,
  .route-details-image-custom-prev {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    user-select: none;
    border: none;
    width: 48px;
    height: 48px;
    position: absolute;
    z-index: 10;
    @media (max-width: 840px) {
      width: 36px;
      height: 36px;
    }
  }
  .route-details-image-custom-next {
    right: -12px;
    @media (max-width: 840px) {
      right: -18px;
    }
    top: 50%;
    transform: translateY(-50%);
  }
  .route-details-image-custom-prev {
    left: -12px;
    @media (max-width: 840px) {
      left: -18px;
    }
    top: 50%;
    transform: translateY(-50%);
  }
`
export const Image = styled.img`
  width: 100%;
  max-width: 24rem; /* 400px */
  /* height: 100%; */
  height: 18rem; /* 288px */
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
  display: block;
  background-color: #f0f0f0;

  @media (max-width: 840px) {
    max-width: 100%;
    height: 13rem;
  }
`
export const PaginationDiv = styled.div`
  .route-details-image-custom-pagination {
`
export const ArrowIcon = styled.img`
  user-select: none;
  width: 20px;
  height: 20px;
  @media (max-width: 840px) {
    width: 16px;
    height: 16px;
  }
`