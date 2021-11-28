import Form from './components/Form'
import styled from 'styled-components';

const AppStyles = styled.div`
background-color: var(--deep-pink);
height: 100vh;
font-family: 'Roboto';
/* display: flex;
justify-content: center;
align-items: center; */
`

function App() {
  return (
    <AppStyles>
      <Form />
    </AppStyles>
  );
}

export default App;
