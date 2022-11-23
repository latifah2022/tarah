// import logo from './logo.svg';
// import './App.css';
import  Container  from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";

function App() {
  return (
    <Container className="my-4">
      <Stack direction='horizontal'  gap='2' className='mb-4'>
         <h1 className="me-auto">budget</h1>
         <Button variant="primary"> Add budget</Button>
         <Button variant="outline-primary">Add Epense</Button>
      </Stack>
      <div style={{ display:"grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))", gap: "1rem", alignItem: "flex-start"}}>
      <BudgetCard></BudgetCard>
      </div>
    </Container>
  )
 
}

export default App;
