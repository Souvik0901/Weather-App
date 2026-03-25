import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/weatherSlice";

function CityCard({ city }) {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.weather.favorites
  );

  const isFavorite =
    favorites.find(c => c.name === city.name);

  const toggleFavorite = () => {

    if(isFavorite) {
      dispatch(removeFavorite(city.name));
    } else {
      dispatch(addFavorite(city));
    }

  };

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

      <button onClick={toggleFavorite}>

        {isFavorite ? "★ Favorited" : "☆ Favorite"}

      </button>

    </div>

  );

}

export default CityCard;