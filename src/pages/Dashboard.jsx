import { useState } from "react";
import { useSelector } from "react-redux";

import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import { fetchWeather } from "../services/weatherApi";

function Dashboard() {

  const favorites =
    useSelector(state => state.weather.favorites);

  const [searchResult, setSearchResult] =
    useState(null);

  const handleSearch = async (cityName) => {

    const data = await fetchWeather(cityName);

    const formatted = {

      name: data.location.name,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      wind: data.current.wind_kph

    };

    setSearchResult(formatted);

  };

  return (

    <div>

      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch}/>

      {/* search result (only one) */}

      {searchResult && (

        <div>

          <h3>Search Result</h3>

          <CityCard city={searchResult}/>

        </div>

      )}

      {/* favorites */}

      <h3>Favorite Cities</h3>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {favorites.map((city, index) => (

          <CityCard
            key={index}
            city={city}
          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;