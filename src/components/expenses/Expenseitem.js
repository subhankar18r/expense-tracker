import { useState } from "react";

import ExpenseDate from "./ExpenseDate";

function Expenseitem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
    console.log("clicked");
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white m-10 p-4">
      <ExpenseDate date={props.date} />
      <h2>{title}</h2>
      <div className="price">{props.amount}</div>
      <button className="bg-white text-black" onClick={clickHandler}>
        change title
      </button>
    </div>
  );
}

export default Expenseitem;
