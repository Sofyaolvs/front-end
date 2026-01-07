import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Image, Button, ArrowIcon } from "./styles"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import arrowLeftIcon from "../../assets/arrow-left-icon.svg"
import arrowRightIcon from "../../assets/arrow-right-icon.svg"
import placeholderImage from "../../assets/beira-mar.png"

export function ImageDisplay({ images }) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const { width, isMobile } = useWindowDimensions()
  const slidesPerView = isMobile ? 1 : 3


  if (!images || !Array.isArray(images) || images.length === 0) {
    return null
  }

  return (
    <Container>
      <Swiper

       modules={[Navigation, Pagination, Scrollbar, A11y]}
        centerInsufficientSlides={true}
        centeredSlides={false}
        spaceBetween={16}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        watchOverflow={true}

        navigation={{
          nextEl: ".route-details-image-custom-next",
          prevEl: ".route-details-image-custom-prev",
        }}
        pagination={{
          el: ".route-details-image-custom-pagination",
          clickable: true,
        }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image || placeholderImage}
                alt={`Imagem ${index + 1} da rota`}
                onError={(e) => {
                  if (e.target.src !== placeholderImage) {
                    e.target.src = placeholderImage
                  }
                }}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {images.length > slidesPerView && (
        <Button className="route-details-image-custom-next" $isActive={!isEnd}>
          <ArrowIcon src={arrowRightIcon} alt="Seta para a direita" />
        </Button>
      )}
      {images.length > slidesPerView && (
        <Button
          className="route-details-image-custom-prev"
          $isActive={!isBeginning}
        >
          <ArrowIcon src={arrowLeftIcon} alt="Seta para a esquerda" />
        </Button>
      )}
      {/* <PaginationDiv className="route-details-image-custom-pagination" /> */}
    </Container>
  )
}
