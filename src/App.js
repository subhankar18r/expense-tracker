import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Container from "./components/UI/Container";

function App() {
  const expenses = [
    {
      date: new Date(),
      title: "car insurance",
      amount: 24.5,
      dAmount() {
        return "$" + this.amount;
      },
    },
  ];
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
        <Expenses expenses={expenses} />
      </Container>
    </div>
  );
}

export default App;
