import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const ExpenseDataHandler = (data) => {
    const ExpenseData = {
      id: Math.random().toString(),
      ...data,
    };
    props.onAddExpense(ExpenseData);

    setIsEditing(false);
  };

  const formChangeHandler = () => {
    setIsEditing(true);
  };
  const formCloseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-purple-500  w-[60vw] m-auto mt-10 text-center">
      {!isEditing ? (
        <button
          className="bg-purple-800 text-white p-3 m-4"
          type="submit"
          onClick={formChangeHandler}
        >
          Add expensess
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={ExpenseDataHandler}
          onClose={formCloseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
