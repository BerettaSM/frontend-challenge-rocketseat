'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    /* CSS Reset */

    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }

    /* Tokens */

    :root {
        --border-radius: 12px;
        --logo-color: #5D5D6D;
        --bg-secondary: #F3F5F6;
        --bg-primary: #F0F0F5;
        --text-dark: #737380;
        --shapes-dark: #09090A;
        --text-dark-2: #41414D;
        --delete-color: #DE3838; 
        --orange-low: #FFA585;
        --shapes: #DCE2E6;
        --secondary-text: #617480;
        --border-color: #A8A8B3;
        --success-color: #51B853;
    }

`;
