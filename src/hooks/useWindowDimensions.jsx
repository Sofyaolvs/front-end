import { useState, useEffect } from "react"

function getWindowDimensions() {
  if (typeof window === "undefined") return { width: 0, height: 0 }
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export function useWindowDimensions() {
  const tabletSize = 1250
  const mobileSize = 840

  const [windowSize, setWindowSize] = useState(getWindowDimensions())
  const [isMobile, setisMobile] = useState(windowSize.width < mobileSize)
  const [isTablet, setIsTablet] = useState(windowSize.width < tabletSize)

  useEffect(() => {
    function handleResize() {
      const newWindowSize = getWindowDimensions()
      setWindowSize(newWindowSize)
      setisMobile(newWindowSize.width < mobileSize)
      setIsTablet(newWindowSize.width < tabletSize)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { ...windowSize, isMobile, isTablet, getWindowDimensions }
}
