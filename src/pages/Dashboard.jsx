import { useState } from "react";
import { useSelector } from "react-redux";

import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import Details from "./Details";
import UnitToggle from "../components/UnitToggle";
import { fetchWeather } from "../services/weatherApi";

function Dashboard() {

  const favorites =
    useSelector(
      state => state.weather.favorites
    );

  const [searchResult, setSearchResult] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

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

  if(selectedCity) {

    return (

      <Details
        city={selectedCity}
        onBack={() => setSelectedCity(null)}
      />

    );

  }

  return (

    <div className="container">

      <h1>Weather Dashboard</h1>
      <UnitToggle />

      <SearchBar onSearch={handleSearch}/>

      {searchResult && (

        <div>

          <h3 className="section-title">
            Search Result
          </h3>

          <div className="card-container">

            <CityCard
              city={searchResult}
              onClick={setSelectedCity}
            />
          </div>

        </div>

      )}

    

      <h3 className="section-title">Favorite Cities</h3>

      <div className="card-container">

        {favorites.length === 0 && (
          <p>
            No favorite cities yet
          </p>

        )}

        {favorites.map(
          (city, index) => (

            <CityCard
              key={index}
              city={city}
              onClick={setSelectedCity}
            />
          )
        )}

      </div>

    </div>

  );


}

export default Dashboard;