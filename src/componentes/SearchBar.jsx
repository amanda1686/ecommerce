import React, { useState, useRef } from 'react';
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchVisible, setSearchVisible] = useState(false);
    const searchInputRef = useRef(null);
    
    const toggleSearch = () => {
    setSearchVisible(!searchVisible);
   
  };

  const searchProducts = async () => {
    const searchTerm = searchInputRef.current.value.toLowerCase();
    // Aquí debes ajustar la ruta correcta para obtener tu archivo JSON
    const response = await fetch('/public/data/data.json');
    const productos = await response.json();
    const resultados = productos.filter(producto => producto.name.toLowerCase().includes(searchTerm));
    setSearchResults(resultados);
 // esto pegue
    if (!searchVisible) {
      setSearchVisible(true);
    }
    // hasta aaqui
};

const displaySearchResults = () => {
    return searchResults.map(result => (
        <div key={result.id} className="search-result">
        <div className="search-img-container">
          <img className="search-img" src={result.img} alt={result.name} />
        </div>
        <div className="search-name">{result.name}</div>
        <div className="search-price">Precio: ${result.price}</div>
      </div>
    ));
};

return (
    <div  className="flex items-center space-x-4">
      <input
        type="text"
        ref={searchInputRef}
        onChange={searchProducts}
        placeholder="Search..."
        className="border p-2 w-24 ml-7 h-6 hidden sm:block "
      />
        <button onClick={toggleSearch} className="text-white px-4 py-2 rounded">
          <FcSearch size={30} />
         
        </button>
      
   
   
      {searchVisible && (
        <div id="search-results" className="show-search">
          {displaySearchResults()}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

