import { useState } from "react";

import Expenseitem from "./Expenseitem";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(setFilteredYear);
  };
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.item.map((expense) => {
        console.log(expense);
        return (
          <Expenseitem
            title={expense.title}
            date={expense.date}
            amount={expense.dAmount()}
          />
        );
      })}
    </div>
  );
};
export default Expenses;
