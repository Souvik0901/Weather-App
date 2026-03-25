import { useState } from "react";
import { useSelector } from "react-redux";

import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import Details from "./Details";

import { fetchWeather } from "../services/weatherApi";

function Dashboard() {

  const favorites =
    useSelector(
      state => state.weather.favorites
    );

  const [searchResult, setSearchResult] =
    useState(null);

  const [selectedCity, setSelectedCity] =
    useState(null);

  const handleSearch = async (cityName) => {

    const data =
      await fetchWeather(cityName);

    const formatted = {

      name: data.location.name,
      temp: data.current.temp_c,
      condition:
        data.current.condition.text,

      humidity: data.current.humidity,
      wind: data.current.wind_kph

    };

    setSearchResult(formatted);

  };

  if(selectedCity) {

    return (

      <Details

        city={selectedCity}

        onBack={() => setSelectedCity(null)}

      />

    );

  }

  return (

    <div>

      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch}/>

      {searchResult && (

        <div>

          <h3>Search Result</h3>

          <CityCard

            city={searchResult}

            onClick={setSelectedCity}

          />

        </div>

      )}

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

            onClick={setSelectedCity}

          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;