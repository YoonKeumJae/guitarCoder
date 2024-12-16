import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Quicksand from "/Quicksand_Book_Oblique.otf";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0;
  }
  @font-face {
    font-family: Quicksand;
        font-style: normal;
        src: url(${Quicksand}) format('opentype');
  }
  body, * {
    font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyle;
