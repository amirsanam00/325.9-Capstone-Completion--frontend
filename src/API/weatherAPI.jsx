import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (cityName) => {
  try {
    const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
      params: {
        key: apiKey,
        q: cityName
      }
    });
    return response.data;
  } catch (error) {
    console.error('WeatherAPI error:', error);
    throw error;
  }
};