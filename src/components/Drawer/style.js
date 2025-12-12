import styled from "styled-components"
import { Link } from "react-router-dom"

export const DrawerContainer = styled.div`
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"} !important;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: var(--neutral-white);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  transition:
    transform 300ms ease,
    visibility 300ms;

  img:first-child {
    align-self: flex-end;
    cursor: pointer;
  }
  img.drawer-logo {
    height: 48px;
    object-fit: contain;
  }
`
export const DrawerPagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
  height: 100vh;
  overflow: auto;
`

export const DrawerPageLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: var(--neutral-darker-gray);
  font-weight: ${({ $isActive }) => ($isActive ? "700" : "600")};
  padding: ${({ $isActive }) => ($isActive ? "10px 0px 6px 0px" : "10px 0px")};
  border-bottom: ${({ $isActive }) =>
    $isActive ? "4px solid var(--secondary-orange)" : "none"};
  /* line-height: 19px; */
`
