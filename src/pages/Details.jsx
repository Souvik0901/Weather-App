import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { fetchForecast }
from "../services/weatherApi";

import WeatherChart
from "../components/WeatherChart";

function Details({ city, onBack }) {

  const unit =
    useSelector(
      state => state.weather.unit
    );

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

  if(!forecast)

    return (

      <div className="container">

        <p>Loading forecast...</p>

      </div>

    );

  const dailyData =
    forecast.forecast.forecastday;

  const hourlyData =
    forecast.forecast.forecastday[0].hour;

  // unit conversion

  const currentTemp =

    unit === "C"

    ? forecast.current.temp_c

    : (forecast.current.temp_c * 9/5) + 32;

  return (

    <div className="container">

      <div className="details-page">

        <button

          className="back-btn"

          onClick={onBack}

        >

          ← Back

        </button>

        <h2 className="page-title">

          {city.name} Weather Details

        </h2>

        <div className="weather-card">

          <div className="temp">

            {currentTemp.toFixed(1)}°{unit}

          </div>

          <div className="condition">

            {

              forecast.current

              .condition.text

            }

          </div>

          <div className="details">

            Humidity:

            {

              forecast.current

              .humidity

            }%

          </div>

          <div className="details">

            Wind:

            {

              forecast.current

              .wind_kph

            } km/h

          </div>

          <div className="details">

            UV Index:

            {

              forecast.current

              .uv

            }

          </div>

        </div>

        <h3 className="section-title">

          7 Day Forecast

        </h3>

        <div className="chart-box">

          <WeatherChart

            type="daily"

            data={dailyData}

          />

        </div>

        <h3 className="section-title">

          Hourly Forecast

        </h3>

        <div className="chart-box">

          <WeatherChart

            type="hourly"

            data={hourlyData}

          />

        </div>

      </div>

    </div>

  );

}

export default Details;