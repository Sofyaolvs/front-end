import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-green);
  position: fixed;
  bottom: calc(1rem + env(safe-area-inset-bottom));
  right: 16px;
  border-radius: 100%;
  height: 56px;
  width: 56px;
  padding: 16px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 10;
  visibility: ${({ $show, $scrollY }) =>
    $show && $scrollY >= 110 ? "visible" : "hidden"};
  opacity: ${({ $show, $scrollY }) => ($show && $scrollY >= 110 ? "1" : "0")};
  transform: ${({ $show, $scrollY }) =>
    $show && $scrollY >= 110 ? "translateY(0)" : "translateY(20px)"};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s ease;

  img {
    size: 24px;
  }
`
