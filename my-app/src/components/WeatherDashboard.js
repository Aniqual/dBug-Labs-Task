import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import WeatherChart from './WeatherChart';
import { fetchWeatherData } from '../utils/api';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
      setCity(lastCity);
      handleSearch(lastCity);
    }
  }, []);

  const handleSearch = async (searchCity) => {
    try {
      const { currentWeather, forecast } = await fetchWeatherData(searchCity, units);
      setWeatherData(currentWeather);
      setForecast(forecast);
      setError(null);
      localStorage.setItem('lastCity', searchCity);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setForecast(null);
    }
  };

  const toggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
    if (weatherData) {
      handleSearch(weatherData.name);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      
      <SearchBar onSearch={handleSearch} />

      <button
        onClick={toggleUnits}
        className="mb-4 bg-gray-200 px-4 py-2 rounded-md"
      >
        Switch to {units === 'metric' ? '°F' : '°C'}
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {weatherData && <CurrentWeather data={weatherData} units={units} />}
      {forecast && <Forecast data={forecast} units={units} />}
      {forecast && forecast.list && <WeatherChart data={forecast.list.slice(0, 8)} units={units} />}
    </div>
  );
};

export default WeatherDashboard;