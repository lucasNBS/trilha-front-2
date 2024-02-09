import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyle