import "./App.css";

import Expenseitem from "./components/Expenseitem";
import Container from "./components/Container";

function App() {
  const expenses = [
    {
      date: new Date(),
      title: "car insurance",
      amount: 24.5,
    },
  ];

  return (
    <Container className="bg-gray-800 p-1 rounded-t-sm w-[60vw] m-auto mt-10">
      <Expenseitem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <Expenseitem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
    </Container>
  );
}

export default App;
