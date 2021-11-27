import styled from 'styled-components';
import Form from './components/Form'

const AppStyles = styled.div`
  div {
    /* background-color: var(--light-pink);
    height: 50vh; */
    h1 {
      /* color: var(--gray-1); */
    }
  }
`;

function App() {
  return (
    <AppStyles>
      <Form />
      {' '}
      <div>
        <h1 className='hello'>hello</h1>
      </div>
    </AppStyles>
  );
}

export default App;
