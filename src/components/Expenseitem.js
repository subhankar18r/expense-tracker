function Expenseitem(props) {
  return (
    <div className="flex justify-between bg-gray-400 m-10 p-4">
      <div>{props.date.toISOString()}</div>
      <h2>{props.title}</h2>
      <div className="price">{props.amount}</div>
    </div>
  );
}

export default Expenseitem;
