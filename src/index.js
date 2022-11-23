import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetContext } from "./context/BudgetContext"

ReactDOM.render(
  <React.StrictMode>
    <BudgetContext>
      <App />
    </BudgetContext>
    
  </React.StrictMode>,
  document.getElementById("root")
);

