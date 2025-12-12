import styled from "styled-components"
import { Link } from "react-router-dom"
import { body1Text } from "../../style/global"

export const NavBarContainer = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  gap: 10px;
  background-color: var(--neutral-white);

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1248px) {
    padding: 1rem;

    ${({ $drawer, $isScrollingUp, $scrollY }) =>
      !$drawer &&
      `
            transform: ${
              $isScrollingUp || $scrollY < 130
                ? "translateY(0)"
                : "translateY(-100%)"
            };
            transition: ${$scrollY < 130 ? "none" : "transform 0.3s ease"};
        `}
  }
`

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 1460px;

  img {
    cursor: pointer;
  }

  img.logo {
    max-width: ${({ $isMobile }) => ($isMobile ? "123px" : "164px")};
  }

  image.menu {
    width: 18px;
    height: 12px;
  }

  .menu {
    position: absolute;
    right: 0;
    padding: 1rem;
  }
  .search {
    color: var(--secondary-orange);
    padding-bottom: 0.5rem;
  }
`

export const PagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1248px) {
    column-gap: 1rem;
  }
`

export const PageLink = styled(Link)`
  ${body1Text};

  padding: 8px 16px;
  text-decoration: none;
  color: var(--neutral-dark-gray);
  font-weight: ${({ $isActive }) => ($isActive ? "500" : "500")};

  /* Outline Novo */
  border-style: solid;
  border-width: 0;
  border-bottom-width: 4px;
  border-color: ${({ $isActive }) =>
    $isActive ? "var(--primary-green)" : "transparent"};

  /* Outline Antigo */
  /* text-decoration: ${({ $isActive }) =>
    $isActive ? "underline" : "none"}; */
  /* text-decoration-color: var(--secondary-orange); */
  /* text-underline-offset: 10px; */
  /* text-decoration-thickness: 4px; */

  /* line-height: 19px; */

  transition: all 0.3s;
`
