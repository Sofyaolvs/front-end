import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { useWindowDimensions } from "../hooks/useWindowDimensions.jsx"
import useScroll from "../hooks/useScroll.jsx"
import AcessibilityBar from "../components/AcessibilityBar/AcessibilityBar.jsx"
import NavBar from "../components/NavBar/NavBar.jsx"
import Drawer from "../components/Drawer/Drawer.jsx"
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton.jsx"
import Footer from "../components/Footer/Footer.jsx"

const Layout = () => {
  const { isMobile, isTablet } = useWindowDimensions()
  const { isScrollingUp, scrollY } = useScroll()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const navProps = {
    isMobile,
    isTablet,
    isDrawerOpen,
    setIsDrawerOpen,
    isScrollingUp,
    scrollY,
  }

  return (
    <>
      <AcessibilityBar isMobile={isMobile} isTablet={isTablet} />
      <header id="header">
        <NavBar {...navProps} />
        <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer id="footer">
        <Footer />
      </footer>

      {isMobile || isTablet ? (
        <ScrollTopButton isScrollingUp={isScrollingUp} scrollY={scrollY} />
      ) : null}
    </>
  )
}

export default Layout
