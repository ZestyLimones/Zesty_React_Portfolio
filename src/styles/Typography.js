import { createGlobalStyle } from 'styled-components';
import Quicksand from '../assets/fonts/Quicksand-VariableFont_wght.ttf';
import NotoSansDisplay from '../assets/fonts/NotoSansDisplay-VariableFont_wdth,wght.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    src: url(${Quicksand});
    font-style: normal;
  }
  @font-face {
    font-family: 'NotoSansDisplay';
    src: url(${NotoSansDisplay});
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
  h1,h2,h3,h4,h5,h6{
    font-family: 'NotoSansDisplay'
  }
`;

export default Typography;
