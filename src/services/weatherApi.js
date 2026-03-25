import axios from "axios";

const API_KEY ="5ef7de7889f84b50b4f162901262503";
const CACHE_TIME = 60000; // 60 seconds
const cache = {};

export const fetchWeather = async (city) => {

    const now = Date.now();
    if(cache[city] && now - cache[city].time < CACHE_TIME) {
      return cache[city].data;
     }

    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    cache[city] = {
      data: response.data,
      time: now
    };

    return response.data;

};

export const fetchForecast = async (city) => {
    
    const now = Date.now();
    if(cache["forecast"+city] && now - cache["forecast"+city].time < CACHE_TIME) {
      return cache["forecast"+city].data;
    }

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`);

    cache["forecast"+city] = {
      data: response.data,
      time: now
    };

  return response.data;

};