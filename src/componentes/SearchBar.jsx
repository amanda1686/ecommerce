import React, { useState, useRef } from 'react';
import { FcSearch } from 'react-icons/fc';

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

    if (!searchVisible) {
      setSearchVisible(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchProducts();
    }
  };

  const handleSearchIconClick = () => {
    searchProducts();
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
    <div className={`container ${searchVisible ? 'active' : ''}`}>
      <input
        type="text"
        ref={searchInputRef}
        onChange={searchProducts}
        onKeyDown={handleKeyDown}
        placeholder="Buscar"
        className="outline-none box-border h-10 p-2 text-black flex-grow text-base ml-2 transition-all duration-700"
      />
      <div
        className="btn text-white px-4 py-2 rounded transition-all duration-0.5s"
        onClick={toggleSearch}
      >
        <FcSearch size={30} onClick={handleSearchIconClick} />
      </div>
      {searchVisible && (
        <div className="search-results">
          {displaySearchResults()}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

