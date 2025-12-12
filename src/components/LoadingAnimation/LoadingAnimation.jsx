import { useState, useEffect } from "react"
import {
  AnimationContainer,
  AnimationFrame,
  Container,
  TextContainer,
  Header,
  Description,
} from "./styles"

import { texts } from "../../resources/texts"

import frame1 from "../../assets/animationFrames/frame1.png"
import frame2 from "../../assets/animationFrames/frame2.png"
import frame3 from "../../assets/animationFrames/frame3.png"
import frame4 from "../../assets/animationFrames/frame4.png"
import frame5 from "../../assets/animationFrames/frame5.png"
import frame6 from "../../assets/animationFrames/frame6.png"
import frame7 from "../../assets/animationFrames/frame7.png"
import frame8 from "../../assets/animationFrames/frame8.png"


const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8]

const LoadingAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length)
    },85)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container>
      <TextContainer>
        <Header>{texts.pages.loadingTexts.heroHeader}</Header>
        <Description>{texts.pages.loadingTexts.heroSubheader}</Description>
      </TextContainer>
      <AnimationContainer>
        <AnimationFrame src={frames[currentFrame]} alt="Animação de carregamento" />
      </AnimationContainer>
    </Container>
  )
}

export default LoadingAnimation
