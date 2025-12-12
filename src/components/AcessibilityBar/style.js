import styled from "styled-components"
import { Link } from "react-router-dom"
import { label1Text, label2Text } from "../../style/global"
import { IoContrastOutline } from "react-icons/io5"

export const AcessibilityBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 2.5rem;
  width: 100%;
  justify-content: ${({ $isMobile }) =>
    $isMobile ? "flex-end" : "space-between"};
  align-items: center;
  padding: 0.625rem 40px;
  background-color: var(--primary-green);

  @media screen and (max-width: 1200px) {
    padding: 0.625rem 1rem;
  }
`

export const FuncionalitiesContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ $isMobile, $isTablet }) =>
    $isMobile ? "0.5rem" : $isTablet ? "0.8rem" : "1.5rem"};

  p {
    ${label2Text};
    font-weight: 500;
  }
`

export const Funcionality = styled(Link)`
  ${label1Text};
  text-decoration: none;
  color: ${({ $isSize }) => ($isSize ? "#1C1B1F" : "var(--neutral-black)")};
  font-weight: ${({ $isSize }) => ($isSize ? "600" : "400")};

  @media screen and (max-width: 1200px) {
    ${label2Text};
  }
`

export const StyledLink = styled.a`
  ${label1Text};
  text-decoration: none;
  color: var(--neutral-black);
  font-weight: 400;

  @media screen and (max-width: 1200px) {
    ${label2Text};
  }
`

export const Divider = styled.span`
  font-size: 1.25rem;
  color: #000000;
  font-weight: 500;
`

export const ContrastImg = styled(IoContrastOutline)`
  cursor: pointer;
  height: 14px;
  width: 14px;
  margin-right: ${({ $isMobile }) => ($isMobile ? "0.5rem" : null)};
`

export const FontSizesContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`
