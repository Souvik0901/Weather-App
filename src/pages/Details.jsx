import { useEffect, useState } from "react";
import { fetchForecast } from "../services/weatherApi";

import WeatherChart from "../components/WeatherChart";

function Details({ city, onBack }) {

  const [forecast, setForecast] =
    useState(null);

  useEffect(() => {

    loadForecast();

  }, []);

  const loadForecast = async () => {

    const data =
      await fetchForecast(city.name);

    setForecast(data);

  };

  if(!forecast) return <p>Loading...</p>;

  const dailyData =
    forecast.forecast.forecastday;

  const hourlyData =
    forecast.forecast.forecastday[0].hour;

  return (

    <div>

      <button onClick={onBack}>
        Back
      </button>

      <h2>{city.name} Details</h2>

      <h3>
        Current Temp:
        {forecast.current.temp_c}°C
      </h3>

      <p>
        Condition:
        {forecast.current.condition.text}
      </p>

      <p>
        Humidity:
        {forecast.current.humidity}
      </p>

      <p>
        Wind:
        {forecast.current.wind_kph}
      </p>

      <p>
        UV:
        {forecast.current.uv}
      </p>

      <h3>7 Day Forecast</h3>

      <WeatherChart
        type="daily"
        data={dailyData}
      />

      <h3>Hourly Forecast</h3>

      <WeatherChart
        type="hourly"
        data={hourlyData}
      />

    </div>

  );

}

export default Details;