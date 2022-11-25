// import logo from './logo.svg';
// import './App.css';
import  Container  from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudget";
import { useState } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./utils/context"

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudgets()


  return (
    <>
    <Container className="my-4">
      <Stack direction='horizontal'  gap='2' className='mb-4'>
         <h1 className="me-auto">budget</h1>
         <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}> Add budget</Button>
         <Button variant="outline-primary">Add Epense</Button>
      </Stack>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px, 1fr))", gap:"1rem", alignItem:"flex-start"}}>
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount, 0
          )
          return (
            <BudgetCard key={budget.id} name={budget.name} amount={amount} max={budget.max} />
          )
          })}
      </div>
    </Container>
    <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
    </>
  )
 
}

export default App;
