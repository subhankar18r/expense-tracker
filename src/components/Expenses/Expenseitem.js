import ExpenseDate from "./ExpenseDate";

function Expenseitem(props) {
  return (
    <li>
      <div className="flex justify-between items-center bg-gray-800 text-white m-10 p-4">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="price">{props.amount}</div>
      </div>
    </li>
  );
}

export default Expenseitem;
