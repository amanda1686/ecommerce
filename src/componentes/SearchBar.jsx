

import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Buscar..."
        className="border p-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
