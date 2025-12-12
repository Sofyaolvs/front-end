import { createGlobalStyle, keyframes } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    /* CSS Variables */
    :root {
        --primary-green: #58B3A6;
        --primary-red:rgba(235, 70, 73, 1);
        --secondary-orange: #F8AE64;
        --secondary-light-orange: #FFC20E80;
        --secondary-blue: #7594A3;
        --neon: #ffff00;
        --neutral-white: #FFFFFF;
        --neutral-black: #212121;
        --neutral-dark-gray: #616161;
        --neutral-gray: #9E9E9E;
        --neutral-light-gray: #E0E0E0;
        --neutral-darker-gray:#424242;
        --success-message: #3D8255;
        --error-message: #A7111D;
        --display-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 3.5625}rem;  // 57px
        --display2-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 2.8125}rem; // 45px
        --display3-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 1.75}rem;  // 28px
        --headline-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 1.5}rem;    // 24px
        --title-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 1.375}rem;     // 22px
        --body1-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 1}rem;         // 16px
        --label1-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 0.875}rem;    // 14px
        --label2-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 0.75}rem;     // 12px
        --button-font-size: ${({ fontAcessibility }) =>
          fontAcessibility + 1}rem;        // 16px
    }    

    /* Default Patterns */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* From here on down these are styles that will automatically be applied to the default components */
    html, body, #root {
        -webkit-font-smoothing: antialiased;
        font-size: 1rem;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
    }

    header {
        position: sticky;
        top: -2px;
        z-index: 1000;
    }
`

/* Typography */
//line-height e letter-spacing estão inconsistentes no figma
export const displayText = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--display-font-size);
    line-height: 1.2222;
`
export const display2Text = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--display2-font-size);
    line-height: 1.2222;
`

export const display3Text = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--display3-font-size);
    line-height: 1.2222;
`

export const headlineText = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--headline-font-size);
    line-height: 1.3333;
`

export const titleText = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--title-font-size);
    line-height: 1.5;
`

export const body1Text = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--body1-font-size);
    line-height: 1.5;
`

export const label1Text = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--label1-font-size);
    line-height: 1.4286;
`

export const label2Text = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--label2-font-size);
    line-height: 1.3333;

`

export const buttonText = `
    font-family: 'Montserrat', sans-serif;
    font-size: var(--button-font-size);
    line-height: 1.5;
`

export const slideAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
