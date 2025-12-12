import { createGlobalStyle } from "styled-components"

export const HighContrastStyle = createGlobalStyle`
    h1, h2, h3, h4, h5, h6, p, label, strong, em, cite, q, i, b, u {
        color: white !important;
    }

    span {
        color: var(--neutral-gray) !important;
    }

    nav {
        background: black !important;
        border-bottom: 1px solid white !important;
        border-top: 1px solid white !important;
    }

    .footer-contrast {
        border-top: 1px solid white !important;
    }

    div.hero-section-contrast {
        background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)) !important;
        z-index: 2;
        @media (max-width: 1240px) {
            background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0,0,0.4)) !important;
        }
    }

    div.route-card-contrast {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.2) 70%) !important;
    }

    html, body, #root {
        background: black !important;
    }

    div {
        background: transparent !important;
        color: white !important;
    }

    div.overlay {
        background: transparent !important;
        color: black !important;

    }

    a {
        color: var(--neon) !important;
    }

    a:hover {
        color: white !important;
    }

    a.btn {
        color: var(--neon) !important;
        background: black !important;
        border: 1px solid yellow !important;
    }

    a.btn:hover {
        color: white !important;
    }

    a.link {
        border-bottom-color: var(--neon) !important;
    }

    a.pageLink {
        text-decoration-color: var(--neon) !important
    }

    a.drawerPage {
        border-color: var(--neon) !important;
    }

    div.inputWrapper {
        border: 1px solid white !important;
    }

    input[type=text].drawer {
        border: none !important;
    }

    button,
    input[type=button],
    input[type=reset],
    input[type=submit] {
        background: black !important;
        color: var(--neon) !important;
        border: none !important;
    }

    input[type=text],
    input[type=password],
    input[type=url],
    input[type=search],
    input[type=email],
    input[type=tel],
    input[type=date],
    input[type=month],
    input[type=week],
    input[type=datetime],
    input[type=datetime-local],
    textarea,
    input[type=number] {
        background: black !important;
        border: 1px solid white !important;
        color: white !important;
    }

    img.on-contrast-force-gray {
        -webkit-filter: grayscale(100%) contrast(120%);
        filter: grayscale(100%) contrast(120%);
    }

    img.on-contrast-force-white {
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
    }

    img.quiz-emoji,
    img.quiz-icon {
        -webkit-filter: brightness(2) saturate(5)  !important;
        filter: brightness(2) saturate(5)  !important;
    }

    button.quiz-button-active {
        border: 5px solid var(--neon) !important;
    }

    img {
        -webkit-filter: grayscale(100%) contrast(120%);
        filter: grayscale(100%) contrast(120%);
    }

    img.on-contrast-invert {
        -webkit-filter: brightness(1) invert(1) !important;
        filter: brightness(1) invert(1) !important;
    }

    a i {
        color: var(--neon) !important;
    }

    small {
        background: black;
        color: white;
    }

    i {
        background: black !important;
        color: white !important;
    }

    .btn {
        border: 1px solid yellow !important;
    }

    button {
        border: 1px solid white !important;
    }
    
    video {
        filter: grayscale(100%) contrast(120%);
    }
`
