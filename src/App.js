import "./App.css";

import Expenseitem from "./components/Expenseitem";

function App() {
  const expenses = [
    {
      date: new Date(),
      title: "car insurance",
      amount: 24.5,
    },
  ];

  return (
    <div>
      <Expenseitem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></Expenseitem>
    </div>
  );
}

export default App;
