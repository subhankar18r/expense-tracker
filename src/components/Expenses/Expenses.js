import Expenseitem from "./Expenseitem";

const Expenses = (props) => {
  return (
    <div>
      <Expenseitem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].dAmount()}
      />
    </div>
  );
};
export default Expenses;
