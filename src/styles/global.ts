import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin:0;
        padding:0;
        border:0;
        font-size:100%;
        font:inherit;
        vertical-align:baseline
    }
    body {
        font-family: 'AvenirNext LT Pro Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        line-height: 1;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
    }
    ul, ol {
        list-style: none;
    }
`;

export default GlobalStyle;
