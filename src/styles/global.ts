import { createGlobalStyle } from "styled-components";
import { colorWhite, fancyFont, standardFont } from "./shared/shared";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin:0;
        padding:0;
        border:0;
        font-size:100%;
        vertical-align:baseline
    }
    body {
        font-family: ${standardFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        line-height: 1;
        color: ${colorWhite};
        font-feature-settings: 'ordn' on;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${fancyFont};
    }
    ul, ol {
        list-style: none;
    }
    h1{
        font-weight: 600;
        font-size: 48px;
        text-transform: capitalize;
        font-feature-settings: 'ordn' on, 'rvrn' on, 'salt' on;
    }
    h2{
        font-weight: 400;
        font-size: 32px;
        line-height: 51px;
    }
    h3{
        font-weight: 400;
        font-size: 20px;
        line-height: 111.5%;
    }
    h4{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }
    a {
        font-variation-settings: 'slnt' -10;
    }
    
`;

export default GlobalStyle;
