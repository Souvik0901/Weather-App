import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer

} from "recharts";

import { useSelector }
from "react-redux";

function WeatherChart({ type, data }) {

  const unit =
    useSelector(
      state => state.weather.unit
    );

  let chartData = [];

  // 7 day data
  if(type === "daily") {

    chartData =
      data.map(day => ({

        label: day.date,

        temp:

        unit === "C"

        ? day.day.avgtemp_c

        : (day.day.avgtemp_c * 9/5) + 32

      }));

  }

  // hourly data
  if(type === "hourly") {

    chartData =
      data.map(hour => ({

        label:
        hour.time.split(" ")[1],

        temp:

        unit === "C"

        ? hour.temp_c

        : (hour.temp_c * 9/5) + 32

      }));

  }

  return (

    <ResponsiveContainer
      width="100%"
      height={300}
    >

      <LineChart data={chartData}>

        <CartesianGrid />

        <XAxis dataKey="label"/>

        <YAxis/>

        <Tooltip/>

        <Line

          type="monotone"

          dataKey="temp"

        />

      </LineChart>

    </ResponsiveContainer>

  );

}

export default WeatherChart;