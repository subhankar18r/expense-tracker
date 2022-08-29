import Expenseitem from "./Expenseitem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="text-center">no expenses found</h2>;
  }
  return (
    <ul>
      {props.items.map((expense) => {
        return (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
