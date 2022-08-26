import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form className="text-center">
      <div className="">
        <div>
          <label className="block">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div>
          <label className="block">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label className="block">Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2021-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button className="bg-purple-800 text-white p-3 m-4" type="submit">
          Add expenses
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
