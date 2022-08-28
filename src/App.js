import { useState } from "react";

import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Container from "./components/UI/Container";

const prevAddedExpenses = [
  {
    title: "car insurance",
    date: new Date(),
    amount: 24.5,
    dAmount() {
      return "$" + this.amount;
    },
  },
];
function App() {
  const [expenses, setExpenses] = useState(prevAddedExpenses);
  const addExpenseHandler = (data) => {
    const expense = {
      ...data,
    };
    console.log("in app.js");
    console.log(expense);
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
