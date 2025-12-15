import React, { useEffect } from "react"
import { DrawerContainer, DrawerPageLink, DrawerPagesContainer } from "./style"
import close from "../../assets/closeOrange.svg"
import boraCorLogo from "../../assets/boraDeBikeCor.svg"
import adminIcon from "../../assets/adminIcon.svg"
import { navModules } from "../../utils/modules/navModules"
import { useAcessibilityContext } from "../../contexts/AcessibilityContext"
import { usePreventScroll } from "react-aria"
import { useNavigate, useLocation } from "react-router-dom"
import { useSearch } from "../../contexts/SearchContext"
import SearchBox from "../SearchBox/SearchBox"

const Drawer = ({ isOpen, setIsOpen }) => {
  const location = useLocation()
  usePreventScroll({ isDisabled: !isOpen })
  const navigate = useNavigate()
  const { searchText, setSearchText } = useSearch()

  const isDrawer = true

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = " unset"
    }
  }, [isOpen])

  const handleSelectPage = (page) => {
    setIsOpen(false)
  }

  return (
    <DrawerContainer $isOpen={isOpen}>
      <img src={close} alt="Imagem Fechar" onClick={() => setIsOpen(false)} />
      <img
        src={boraCorLogo}
        className="drawer-logo"
        alt="Bora de Bike Logo"
        onClick={() => {
          handleSelectPage("/"), navigate("/")
        }}
      />

      <SearchBox
        searchText={searchText}
        setSearchText={setSearchText}
        handleSelectPage={handleSelectPage}
        isDrawer
      />

      <DrawerPagesContainer>
        {navModules.map((module, index) => (
          <DrawerPageLink
            className="drawerPage"
            $isActive={location.pathname === module.link}
            onClick={() => handleSelectPage(module.link)}
            key={index}
            to={module.link}
          >
            {module.title}
          </DrawerPageLink>
        ))}
        <DrawerPageLink
          className="drawerPage"
          $isActive={location.pathname === "/admin"}
          onClick={() => handleSelectPage("/admin")}
          to="/admin"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.8
          }}
        >
          <img src={adminIcon} alt="Admin" style={{ height: '20px' }} />
          Administrador
        </DrawerPageLink>
      </DrawerPagesContainer>
    </DrawerContainer>
  )
}

export default Drawer
