import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const ExpenseDataHandler = (data) => {
    const ExpenseData = {
      id: Math.random().toString(),
      ...data,
    };
    props.onAddExpense(ExpenseData);
  };

  return (
    <div className="bg-purple-500  w-[60vw] m-auto mt-10">
      <ExpenseForm onSaveExpenseData={ExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
