import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import { fetchWeather } from "../services/weatherApi";

function Dashboard() {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    loadDefaultCities();
  }, []);

  const loadDefaultCities = async () => {

    const kolkata = await fetchWeather("Kolkata");

    setCities([
      {
        name: kolkata.location.name,
        temp: kolkata.current.temp_c,
        condition: kolkata.current.condition.text,
        humidity: kolkata.current.humidity,
        wind: kolkata.current.wind_kph
      }
    ]);

  };

  // const handleSearch = async (cityName) => {

  //   const data = await fetchWeather(cityName);

  //   const newCity = {

  //     name: data.location.name,
  //     temp: data.current.temp_c,
  //     condition: data.current.condition.text,
  //     humidity: data.current.humidity,
  //     wind: data.current.wind_kph

  //   };

  //   setCities(prev => [...prev, newCity]);

  // };



  const handleSearch = async (cityName) => {

  // check duplicate city
  const exists = cities.find(
    c => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (exists) {
    alert("City already added");
    return;
  }

  try {

    const data = await fetchWeather(cityName);

    const newCity = {

      name: data.location.name,
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      humidity: data.current.humidity,
      wind: data.current.wind_kph

    };

    setCities(prev => [...prev, newCity]);

  } catch (error) {

    alert("City not found");

  }

};

  return (

    <div>

      <h1>Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch}/>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        {cities.map((city, index) => (
          <CityCard key={index} city={city}/>
        ))}

      </div>

    </div>

  );

}

export default Dashboard;