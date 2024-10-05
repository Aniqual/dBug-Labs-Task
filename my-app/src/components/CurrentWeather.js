import React from 'react';
import { Cloud, Droplet, Wind } from 'lucide-react';
import { formatTemperature } from '../utils/helpers';

const CurrentWeather = ({ data, units }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
      <div className="flex items-center mb-2">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="mr-2"
        />
        <span className="text-4xl">{formatTemperature(data.main.temp, units)}</span>
      </div>
      <p className="capitalize mb-2">{data.weather[0].description}</p>
      <div className="flex items-center mb-2">
        <Droplet size={18} className="mr-1" />
        <span>Humidity: {data.main.humidity}%</span>
      </div>
      <div className="flex items-center">
        <Wind size={18} className="mr-1" />
        <span>Wind: {data.wind.speed} {units === 'metric' ? 'm/s' : 'mph'}</span>
      </div>
    </div>
  );
};

export default CurrentWeather;