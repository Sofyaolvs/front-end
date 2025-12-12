import { useState, useEffect, useRef } from "react"

export default function useScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      currentScrollY > lastScrollY.current
        ? setIsScrollingUp(false)
        : setIsScrollingUp(true)

      lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollY, isScrollingUp }
}
