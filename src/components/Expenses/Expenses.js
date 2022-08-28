import { useState } from "react";

import Expenseitem from "./Expenseitem";
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

  let expenseContent = <p>no expenses are added</p>;
  if (filteredYearExpenses.length > 0) {
    expenseContent = filteredYearExpenses.map((expense) => {
      return (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={"$" + expense.amount}
        />
      );
    });
  }

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </div>
  );
};
export default Expenses;
