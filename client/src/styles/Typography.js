import { createGlobalStyle } from 'styled-components';
import OSBold from '../assets/fonts/OpenSans-Bold.ttf';
import OSExtraBold from '../assets/fonts/OpenSans-ExtraBold.ttf';
import Roboto from '../assets/fonts/Roboto-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
    font-style: normal;
  }
  @font-face {
    font-family: 'OSBold';
    src: url(${OSBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'OSExtraBold';
    src: url(${OSExtraBold});
    font-style: normal;
  }
  html{
    font-family: 'Roboto';
    color: var(--gray-1);
  }
  *{
    font-family: 'Roboto';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'SF-Semibold'
  }

`;

export default Typography;
