import React from 'react'
import Form from './components/Form'
import styled from 'styled-components';

const AppStyles = styled.div`
background-color: var(--deep-pink);
color: var(--deep-pink);
height: 100vh;
width: 100vw;
`

function App() {
  return (
    <AppStyles>
      <Form />
    </AppStyles>
  );
}

export default App;
