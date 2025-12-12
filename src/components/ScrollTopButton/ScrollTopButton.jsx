import React, { useEffect } from "react"
import { Container } from "./style"
import topIcon from "../../assets/topIcon.svg"

const ScrollTopButton = ({ isScrollingUp, scrollY }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Container onClick={handleClick} $show={isScrollingUp} $scrollY={scrollY}>
      <img src={topIcon} alt="Voltar ao topo" />
    </Container>
  )
}

export default ScrollTopButton
