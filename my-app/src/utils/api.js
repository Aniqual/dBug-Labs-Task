const API_KEY = 'b9f940562b85982732ce80f347324dc2';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city, units) => {
  try {
    const currentWeatherResponse = await fetch(
      `${API_BASE_URL}/weather?q=${city}&units=${units}&appid=${API_KEY}`
    );
    const forecastResponse = await fetch(
      `${API_BASE_URL}/forecast?q=${city}&units=${units}&appid=${API_KEY}`
    );

    if (!currentWeatherResponse.ok || !forecastResponse.ok) {
      throw new Error('City not found');
    }

    const currentWeather = await currentWeatherResponse.json();
    const forecast = await forecastResponse.json();

    return { currentWeather, forecast };
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};