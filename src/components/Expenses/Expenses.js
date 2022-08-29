import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearExpenses = props.item.filter((data) => {
    return data.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredYearExpenses} />
    </div>
  );
};
export default Expenses;
