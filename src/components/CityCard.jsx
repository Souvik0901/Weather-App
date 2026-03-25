function CityCard({ city }) {

  return (

    <div style={{
      border: "1px solid gray",
      padding: "15px",
      width: "200px",
      borderRadius: "10px"
    }}>

      <h2>{city.name}</h2>

      <h3>{city.temp}°C</h3>

      <p>{city.condition}</p>

      <p>Humidity: {city.humidity}%</p>

      <p>Wind: {city.wind} km/h</p>

    </div>

  );

}

export default CityCard;