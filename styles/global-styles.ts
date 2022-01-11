import reset from "styled-reset";
import { createGlobalStyle,css } from "styled-components";
import { breakpoints } from "../context/breakpoint";

const GlobalStyle = createGlobalStyle`
  
  ${reset}

  html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        font-family: 'Roboto', sans-serif;
        min-height: 100%;
        box-sizing: border-box;
      }
  * {
    box-sizing: border-box;
    /* font-family: 'Roboto' ,sans-serif; */

    &::selection {
      background: #000;
      color: #fff;
    }
  }
  a,a:visited,a:active,a:link{
    color:inherit;
    text-decoration:none;
  }
  .sec-font{
    font-family: 'Playfair Display' , sans-serif;

  }
  button{
    &:active,&:focus{
      outline:none;
    }
      background-color:transparent;
      border:none;
  }
  .tablet{
    @media (min-width: ${breakpoints.md + 1}px) {
      display: none !important;
    }
  }
  .pc{
    @media (max-width: ${breakpoints.md}px) {
      display:none !important;
    }
  }
`;

export default GlobalStyle;