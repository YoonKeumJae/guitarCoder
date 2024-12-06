import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import HSSantokkiRegular from "/HSSantokki-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
  }
  @font-face {
    font-family: 'HSSantokki-Regular';
        src: local('HSSantokki-Regular'), local('HSSantokki-Regular');
        font-style: normal;
        src: url(${HSSantokkiRegular}) format('truetype');
  }
  body, * {
    font-family: 'HSSantokki-Regular', sans-serif;
  }
`;

export default GlobalStyle;
