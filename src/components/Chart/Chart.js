import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((datapoint) => {
    return datapoint.value;
  });
  const totalMaximum = Math.max(...dataPointvalues);

  return (
    <div className="bg-purple-400 h-40 flex p-6 mt-4">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
