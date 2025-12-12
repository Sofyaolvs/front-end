import { styled, keyframes } from "styled-components"

const animloader = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`

export const Loader = styled.span`
  margin: 32px 0px;
  width: 100%;
  max-width: 720px;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background-color: #fff;
  overflow: hidden;

  &::after {
    content: "";
    width: 192px;
    height: 4.8px;
    background: var(--secondary-orange);
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: ${animloader} 2s linear infinite;
  }
`
