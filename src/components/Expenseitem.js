function Expenseitem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="flex justify-between items-center bg-gray-400 m-10 p-4">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <h2>{props.title}</h2>
      <div className="price">{props.amount}</div>
    </div>
  );
}

export default Expenseitem;
