import React, { useEffect } from 'react';

const SearchResults = ({ results, addToCart, buttonRefresh }) => {
  useEffect(() => {
    // Lógica para manejar la actualización del botón
    // Puedes realizar acciones adicionales aquí si es necesario
    console.log('Button refreshed');
  }, [buttonRefresh]);

  return (
    <div id="search-results" className="show-search" style={searchResultsContainerStyles}>
      <div style={resultsContainerStyles}>
        {results.map(result => (
          <div key={result.id} className="search-result" style={searchResultStyles}>
            <div className="search-img-container">
              <img
                className="search-img"
                src={result.img}
                alt={result.name}
                style={searchImageStyles}
              />
            </div>
            <div className="search-details" style={searchDetailsStyles}>
              <div className="search-name">{result.name}</div>
              <div className="search-price">Precio: ${result.price}</div>
              <button
                onClick={() => addToCart(result)}
                className={`bg-sky-950 text-white px-4 py-2 rounded-md hover:bg-amber-500 ${buttonRefresh ? 'refresh-button' : ''}`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const searchResultsContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
};

const resultsContainerStyles = {
  display: 'flex',
  overflowX: 'auto',
};

const searchResultStyles = {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '20px',
};

const searchImageStyles = {
  width: '150px',
  height: 'auto',
};

const searchDetailsStyles = {
  marginTop: '5px',
};

export default SearchResults;