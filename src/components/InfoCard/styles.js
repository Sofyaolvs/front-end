import styled from "styled-components"
import { Link } from "react-router-dom"
import { display2Text } from "../../style/global"

export const CardContainer = styled(Link)`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
  }
`

export const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`

export const CardContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const CardTitle = styled.h2`
  ${display2Text};
  color: var(--neutral-white);
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
