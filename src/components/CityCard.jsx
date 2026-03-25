import { useDispatch, useSelector }
from "react-redux";

import {
  addFavorite,
  removeFavorite
}
from "../redux/weatherSlice";

function CityCard({ city, onClick }) {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.weather.favorites
  );

  const isFavorite =
    favorites.find(
      c => c.name === city.name
    );

  const toggleFavorite = (e) => {

    e.stopPropagation(); // prevent card click

    if(isFavorite) {

      dispatch(
        removeFavorite(city.name)
      );

    } else {

      dispatch(
        addFavorite(city)
      );

    }

  };

  return (

    <div

      onClick={() =>
        onClick && onClick(city)
      }

      style={{
        border: "1px solid gray",
        padding: "15px",
        width: "200px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >

      <h2>{city.name}</h2>

      <h3>{city.temp}°C</h3>

      <p>{city.condition}</p>

      <p>
        Humidity:
        {city.humidity}%
      </p>

      <p>
        Wind:
        {city.wind} km/h
      </p>

      <button onClick={toggleFavorite}>

        {isFavorite
          ? "★ Favorited"
          : "☆ Favorite"}

      </button>

    </div>

  );

}

export default CityCard;