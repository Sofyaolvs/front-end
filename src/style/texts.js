import styled from "styled-components"

export const DisplayText = styled.h1`
  font-size: var(--display-font-size);
  line-height: 64px;
  font-weight: 700;
  color: ${({ color }) => (color ? `var(${color})` : `var(--neutral-black)`)};

  span {
    color: var(--primary-green);
  }

  @media (max-width: 1240px) {
    font-size: 28px;
    line-height: 34px;
  }
`

export const DisplayText2 = styled.h1`
  font-size: var(--display2-font-size);
  line-height: 52px;
  font-weight: bold;
  color: ${({ color }) => (color ? `var(${color})` : `var(--neutral-black)`)};

  @media (max-width: 1240px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 840px) {
    text-align: left;
    padding-left: 16px;
  }
`

export const Body1Text = styled.h2`
  font-size: var(--body1-font-size);
  line-height: 24px;
  font-weight: normal;
  color: ${({ color }) => (color ? `var(${color})` : `var(--neutral-black)`)};
`
