import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --deep-pink: #F7DBD7;
  --semi-pink: #fff9f9;
  --light-pink: #FCFCFC;
  --white : white;
  --black: black;
  --gray-1: #7f7f7f;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
html{
  font-size: 10px;
  font-family: 'Roboto';
  background-color: var(--deep-pink);
  scroll-behavior: smooth;
}ul,li{
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
  background-color: var(--gray-1);
  .scroll-content {
    background-color: var(--deep-pink);
  }
  .scrollbar-track.scrollbar-track-y {
    background: var(--semi-pink);
    .scrollbar-thumb-y {
      background: var(--gray-1);
    }
  }
}
`;

export default GlobalStyles;
