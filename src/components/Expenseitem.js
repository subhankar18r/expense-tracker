import ExpenseDate from "./ExpenseDate";

function Expenseitem(props) {
  return (
    <div className="flex justify-between items-center bg-gray-400 m-10 p-4">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="price">{props.amount}</div>
    </div>
  );
}

export default Expenseitem;
