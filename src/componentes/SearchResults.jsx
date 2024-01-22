
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div id="search-results" className="show-search">
      {results.map(result => (
        <div key={result.id} className="search-result">
          <div className="search-img-container">
            <img className="search-img" src={result.img} alt={result.name} />
          </div>
          <div className="search-name">{result.name}</div>
          <div className="search-price">Precio: ${result.price}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
