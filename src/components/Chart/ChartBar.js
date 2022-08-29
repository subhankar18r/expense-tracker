const ChartBar = (props) => {
  let barFilHeight = "0%";
  if (props.max > 0) {
    barFilHeight = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className="w-full text-center h-full">
      <div className="inner bg-white  w-3 h-full m-auto rounded-md flex items-end">
        <div
          className="fill w-full bg-black overflow-hidden rounded-md"
          style={{ height: barFilHeight }}
        ></div>
      </div>
      <div>{props.label}</div>
    </div>
  );
};
export default ChartBar;
