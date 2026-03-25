import { useDispatch, useSelector } from "react-redux";

import {
  addFavorite,
  removeFavorite
} from "../redux/weatherSlice";

function CityCard({ city, onClick }) {

  const dispatch = useDispatch();

  const favorites =
    useSelector(
      state => state.weather.favorites
    );

  const unit =
    useSelector(
      state => state.weather.unit
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

  // temperature conversion
  const temp =
    unit === "C"
    ? city.temp
    : (city.temp * 9/5) + 32;

  return (

        <div className="weather-card"
           onClick={()=>onClick(city)}
        >

        <h2>{city.name}</h2>

        <div className="temp">
        {temp.toFixed(1)}°{unit}
        </div>

        <div className="condition">
        {city.condition}
        </div>

        <div className="details">
        Humidity: {city.humidity}%
        </div>

        <div className="details">
        Wind: {city.wind} km/h
        </div>

        <button className="favorite-btn"
           onClick={toggleFavorite}
        >
        {isFavorite ? "★ Saved" : "☆ Favorite"}
        </button>

    </div>

  );

}

export default CityCard;