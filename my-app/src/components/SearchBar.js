import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow p-2 border border-gray-300 rounded-l-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;