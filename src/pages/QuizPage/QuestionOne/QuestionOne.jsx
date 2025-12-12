import { useRef, useEffect } from "react"

import arrowLeftIcon from "../../../assets/arrow-left-icon.svg"
import arrowRightIcon from "../../../assets/arrow-right-icon.svg"

import emoji0 from "../../../assets/emoji0.svg"
import emoji1 from "../../../assets/emoji1.svg"
import emoji2 from "../../../assets/emoji2.svg"
import emoji3 from "../../../assets/emoji3.svg"
import emoji4 from "../../../assets/emoji4.svg"

import {
  ArrowButtonsContainer,
  ArrowIcon,
  CircleArrowButton,
  EmojiImage,
  EmojiWrapper,
  QuestionOneContainer,
  QuestionOneContent,
  QuestionOneLabel,
} from "./styles.js"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { Navigation } from "swiper/modules"
import { useWindowDimensions } from "../../../hooks/useWindowDimensions.jsx"

const emojis = [
  { id: 0, src: emoji0, label: "Meio sem gás" },
  { id: 1, src: emoji1, label: "De boa" },
  { id: 2, src: emoji2, label: "Quero algo leve" },
  { id: 3, src: emoji3, label: "Animado" },
  { id: 4, src: emoji4, label: "Topando tudo!" },
]

export function QuestionOne({ selectedEmoji, setSelectedEmoji }) {
  const { width } = useWindowDimensions()
  const swiperRef = useRef(null)

  function slideToEmoji(emojiId) {
    swiperRef.current.swiper.slideTo(emojiId, 600, false)
  }

  function handleEmojiClick(emojiId) {
    setSelectedEmoji(emojiId)
    slideToEmoji(emojiId)
  }

  const nextOption = () => {
    if (selectedEmoji < emojis.length - 1) {
      setSelectedEmoji(selectedEmoji + 1)
      slideToEmoji(selectedEmoji + 1)
    }
  }

  const previousOption = () => {
    if (selectedEmoji > 0) {
      setSelectedEmoji(selectedEmoji - 1)
      slideToEmoji(selectedEmoji - 1)
    }
  }

  return (
    <QuestionOneContainer>
      <QuestionOneContent>
        <Swiper
          ref={swiperRef}
          spaceBetween={1}
          slidesPerView={width > 1200 ? 5 : width > 300 ? 3 : 1}
          centeredSlides={true}
          onSlideChange={(swiper) => setSelectedEmoji(swiper.realIndex)}
          initialSlide={selectedEmoji}
          modules={[Navigation]}
          allowTouchMove={true}
          slidesPerGroup={1} // Move apenas um slide por vez
          longSwipes={false} // Desabilita swipes longos que moveriam mais de um slide
          shortSwipes={true} // Garante que um toque curto mova apenas um slide
          speed={300} // Ajusta a velocidade da transição para uma experiência controlada
        >
          {emojis.map((emoji) => (
            <SwiperSlide key={emoji.id}>
              <EmojiWrapper
                $actualOption={selectedEmoji}
                $emojiId={emoji.id}
                onClick={() => handleEmojiClick(emoji.id)}
              >
                <EmojiImage
                  src={emoji.src}
                  alt={`Emoji ${emoji.id}`}
                  $actualOption={selectedEmoji}
                  $emojiId={emoji.id}
                  className="quiz-emoji"
                />
              </EmojiWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </QuestionOneContent>
      <ArrowButtonsContainer>
        <CircleArrowButton
          onClick={previousOption}
          $isActive={selectedEmoji > 0}
        >
          <ArrowIcon src={arrowLeftIcon} alt="Seta para a esquerda" />
        </CircleArrowButton>
        <QuestionOneLabel>{emojis[selectedEmoji].label}</QuestionOneLabel>
        <CircleArrowButton
          onClick={nextOption}
          $isActive={selectedEmoji < emojis.length - 1}
        >
          <ArrowIcon src={arrowRightIcon} alt="Seta para a direita" />
        </CircleArrowButton>
      </ArrowButtonsContainer>
    </QuestionOneContainer>
  )
}
