import styled from "styled-components"
import { body1Text } from "../../style/global"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: ${({ $isTablet }) => ($isTablet ? "1rem" : "12.5%")};
  position: absolute;
  z-index: 1;
  margin-top: ${({ $isTablet }) => ($isTablet ? "1rem" : "2rem")};
  background-color: transparent !important;
`

export const BreadcrumbWrapper = styled.div`
  background-color: transparent !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  left: 10%;
`

export const BreadcrumbItem = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const BackContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`

export const ArrowBack = styled.img``

export const Crumb = styled(Link)`
  text-decoration: none;
  font-weight: ${({ $secondToLast, $last }) => {
    if ($last) {
      return "bold"
    } else if ($secondToLast) {
      return "700"
    } else {
      return "500"
    }
  }};
  ${body1Text}
  color: var(--neutral-gray);
  color: ${({ $contrast, $last, $isTablet }) => {
    if ($contrast) {
      return "var(--neutral-white)"
    }
    if ($last) {
      return "var(--secondary-orange)"
    }
    if ($isTablet) {
      return "var(--secondary-orange)"
    }
    return "var(--neutral-gray)"
  }};
`

export const ArrowRight = styled.img``

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
`
