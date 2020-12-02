import './App.css';
import ExpenseTrack from "./Expense-track";
import {TransactionProvider} from "./transContext";

function App() {
  return (
    <TransactionProvider>
      <ExpenseTrack/>
    </TransactionProvider>
  );
}

export default App;
