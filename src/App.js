import "./App.css";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenseitem from "./components/Expenses/Expenseitem";
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

  return (
    <div>
      <NewExpense />
      <Container className="bg-gray-400 p-1 rounded-t-sm w-[60vw] m-auto mt-10">
        <Expenseitem
          title={expenses[0].title}
          date={expenses[0].date}
          amount={expenses[0].dAmount()}
        />
      </Container>
    </div>
  );
}

export default App;
