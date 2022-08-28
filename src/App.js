import { useState } from "react";

import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Container from "./components/UI/Container";

const prevAddedExpenses = [
  {
    id: 1,
    title: "car insurance",
    date: new Date(),
    amount: 24.5,
  },
];
function App(props) {
  const [expenses, setExpenses] = useState(prevAddedExpenses);
  const addExpenseHandler = (data) => {
    setExpenses((prevExpense) => {
      return [data, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Container className="bg-gray-400 p-1 rounded-t-sm w-[60vw] m-auto mt-10">
        <Expenses item={expenses} />
      </Container>
    </div>
  );
}

export default App;
