import { createGlobalStyle } from 'styled-components';
import Quicksand from '../assets/fonts/Quicksand-VariableFont_wght.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand});
    font-style: normal;
  }
  html{
    font-family: 'Quicksand';
    color: var(--blue-1);
  }
  *{
    font-family: 'Quicksand';
    color: var(--blue-1);
  }
`;

export default Typography;
