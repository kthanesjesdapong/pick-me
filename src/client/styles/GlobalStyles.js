import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --deep-pink: #F7DBD7;
  --semi-pink: #fff9f9;
  --light-pink: #FCFCFC;
  --white : white;
  --black: black;
  --gray-1: #7f7f7f;
  height: 100%;
  
}

body {
  margin: 0;
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
button{
  outline: none
}
div {
  color: var(--deep-pink);
  background-color: var(--deep-pink);
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
`;

export default GlobalStyles;
