import React, { useState } from "react"
import SearchIcon from "../../assets/searchIconGreen.svg"
import { Input, InputWrapper, Button } from "./style"
import { useNavigate } from "react-router-dom"
import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { useSearch } from "../../contexts/SearchContext"

const SearchBox = ({
  handleSelectPage,
  isDrawer,
  isWeb,
  isNav,
  isExpanded,
  handleExpand,
}) => {
  const navigate = useNavigate()

  const { setSearchText } = useSearch()

  const { isMobile } = useWindowDimensions()

  const { width } = useWindowDimensions().getWindowDimensions()

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    console.log(searchQuery === "");
    if (searchQuery === "") {
      setSearchText("")
      return navigate("/busca/")
    }
      
    setSearchText(searchQuery)
    isDrawer
      ? (handleSelectPage("/busca"), navigate(`/busca/${searchQuery}`))
      : (setSearchQuery(""), navigate(`/busca/${searchQuery}`))
  }

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <InputWrapper
      className="inputWrapper"
      $isMobile={isMobile}
      $isWeb={isWeb}
      $isExpanded={isExpanded}
      $width={width}
      $isNav={isNav}
      onMouseEnter={isNav && width > 1530 ? () => handleExpand() : null}
      onMouseLeave={isNav && width > 1530 ? () => handleExpand() : null}
    >
      <Input
        className="drawer"
        value={searchQuery}
        onKeyDown={(e) => handleKeydown(e)}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button id="busca" onClick={handleSearch} className="searchButton">
        <img src={SearchIcon} alt="" />
      </Button>
    </InputWrapper>
  )
}

export default SearchBox
