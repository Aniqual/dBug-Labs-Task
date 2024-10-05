import React from 'react';
import { formatTemperature } from '../utils/helpers';

const Forecast = ({ data, units }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.list.filter((item, index) => index % 8 === 0).map((item) => (
          <div key={item.dt} className="text-center">
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="mx-auto"
            />
            <p>{formatTemperature(item.main.temp, units)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;