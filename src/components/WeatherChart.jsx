import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid

} from "recharts";

function WeatherChart({ type, data }) {

  let chartData = [];

  if(type === "daily") {

    chartData = data.map(day => ({
      date: day.date,
      temp: day.day.avgtemp_c
    }));

  }

  if(type === "hourly") {

    chartData = data.map(hour => ({
      time: hour.time,
      temp: hour.temp_c
    }));

  }

  return (

    <LineChart
      width={500}
      height={300}
      data={chartData}
    >

      <CartesianGrid />

      <XAxis
        dataKey={
          type === "daily"
          ? "date"
          : "time"
        }
      />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="temp"
      />

    </LineChart>

  );

}

export default WeatherChart;