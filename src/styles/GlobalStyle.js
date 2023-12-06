import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #0D1321;
    --blue-1: #748CAB;
    --deep-dark: #1D2D44;
    --blue-2: #3E5C76;
    --white: #F0EBD8;
    --black: black;
  }
  html{
    font-size: 10px;
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    line-height:2rem;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--blue-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--blue-1);
      }
    }
  }
`;
export default GlobalStyles;
