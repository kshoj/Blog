import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f6f4f0;
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none !important;
  }
`;

export default GlobalStyle;
