import { useEffect, useState } from "react";
import CityCard from "../components/CityCard";
import { fetchWeather } from "../services/weatherApi";

function Dashboard() {

  const [cities, setCities] = useState([]);

  useEffect(() => {

    loadWeather();

  }, []);

  const loadWeather = async () => {

    const kolkata = await fetchWeather("Kolkata");
    const delhi = await fetchWeather("Delhi");

    const formattedData = [

      {
        name: kolkata.location.name,
        temp: kolkata.current.temp_c,
        condition: kolkata.current.condition.text,
        humidity: kolkata.current.humidity,
        wind: kolkata.current.wind_kph
      },

      {
        name: delhi.location.name,
        temp: delhi.current.temp_c,
        condition: delhi.current.condition.text,
        humidity: delhi.current.humidity,
        wind: delhi.current.wind_kph
      }

    ];

    setCities(formattedData);

  };

  return (

    <div>

      <h1>Weather Dashboard</h1>

      <div style={{
        display: "flex",
        gap: "20px"
      }}>

        {cities.map((city, index) => (

          <CityCard key={index} city={city}/>

        ))}

      </div>

    </div>

  );

}

export default Dashboard;