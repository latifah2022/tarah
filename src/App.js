// import logo from './logo.svg';
// import './App.css';
import  Container  from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Stack direction='horizintal'  gap='2' className='mb-4'>
         <h1>budget</h1>
         <Button> Add budget</Button>
         <Button>Add Epense</Button>
      </Stack>
    </Container>
  )
}

export default App;
