import CityCard from "../components/CityCard";

const cities = [
  {
    name: "Kolkata",
    temp: 30,
    condition: "Cloudy",
    humidity: 70,
    wind: 12
  },
  {
    name: "Delhi",
    temp: 35,
    condition: "Sunny",
    humidity: 40,
    wind: 8
  }
];

function Dashboard() {

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