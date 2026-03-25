import axios from "axios";

const API_KEY = "5ef7de7889f84b50b4f162901262503";

export const fetchWeather = async (city) => {

  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );

  return response.data;
};



export const fetchForecast = async (city) => {

  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=5ef7de7889f84b50b4f162901262503&q=${city}&days=7`
  );

  return response.data;
};