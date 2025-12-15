import React, { useState } from "react"
import {
  InnerContainer,
  NavBarContainer,
  PageLink,
  PagesContainer,
} from "./style"
import boraCorLogo from "../../assets/boraDeBikeCor.svg"
import { navModules } from "../../utils/modules/navModules"
import menuIcon from "../../assets/menuOrange.svg"
import { useNavigate, useLocation } from "react-router-dom"
import { useAcessibilityContext } from "../../contexts/AcessibilityContext"
import { useSearch } from "../../contexts/SearchContext"
import adminIcon from '../../assets/adminIcon.svg'
import SearchBox from "../SearchBox/SearchBox"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"

const NavBar = ({
  isScrollingUp,
  scrollY,
  isMobile,
  isTablet,
  setIsDrawerOpen,
  isDrawerOpen,
}) => {
  const { currentPage, setCurrentPage } = useAcessibilityContext()
  const location = useLocation()

  const navigate = useNavigate()

  const { setSearchText } = useSearch()

  const { width } = useWindowDimensions().getWindowDimensions()

  const handlePageChange = (pageLink) => {
    setCurrentPage(pageLink)
  }

  const [isExpanded, setIsExpanded] = useState(true)

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded)
  }

  const isWeb = !isMobile && !isTablet

  return (
    <NavBarContainer
      id="navbar"
      $scrollY={scrollY}
      $isScrollingUp={isScrollingUp}
      $isMobile={isMobile}
      $isTablet={isTablet}
      $drawer={isDrawerOpen}
    >
      <InnerContainer $isMobile={isMobile}>
        <img
          className="logo"
          src={boraCorLogo}
          alt="Bora de Bike Logo"
          onClick={() => {
            navigate("/")
          }}
        />


        {!isMobile && !isTablet && width > 1289 ? (
          <PagesContainer>
            {navModules.map((module, index) =>
              module.isImage ? (
                <img
                  className={"search"}
                  key={index}
                  src={module.imgSrc}
                  alt="Busca"
                  onClick={handlePageChange(module.link)}
                />
              ) : (
                <PageLink
                  target={module.link.includes("http") ? "_blank" : ""}
                  className="pageLink"
                  $isActive={location.pathname === module.link}
                  onClick={() => handlePageChange(module.link)}
                  key={index}
                  to={module.link}
                >
                  {module.title}
                </PageLink>
              )
            )}
            <PageLink
              className="pageLink"
              $isActive={location.pathname === "/admin"}
              onClick={() => handlePageChange("/admin")}
              to="/admin"
              style={{ opacity: 0.6, fontSize: '0.9em' }}
            >
            <img src={adminIcon} alt="Administrados" style={{height:'24px'}} />
            </PageLink>
            <SearchBox
              isNav={true}
              isWeb={isWeb}
              isExpanded={isExpanded}
              handleExpand={handleSearchClick}
            />
          </PagesContainer>
        ) : (
          <img
            className="menu"
            src={menuIcon}
            onClick={() => {
              setIsDrawerOpen(true), setSearchText("")
            }}
            alt="Menu"
          />
        )}
      </InnerContainer>
    </NavBarContainer>
  )
}

export default NavBar
