// SearchBar.js
import React, { useState, useRef } from 'react';
import { FcSearch } from 'react-icons/fc';
import Modal from 'react-modal';
import SearchResults from './SearchResults';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const searchProducts = async () => {
    const term = searchInputRef.current.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      // Realiza la búsqueda aquí con searchTerm
      const searchTerm = searchInputRef.current.value.toLowerCase();
      // Aquí debes ajustar la ruta correcta para obtener tu archivo JSON
      fetch('/public/data/data.json')
        .then((response) => response.json())
        .then((productos) => {
          const resultados = productos.filter((producto) => producto.name.toLowerCase().includes(searchTerm));
          setSearchResults(resultados);
          setSearchVisible(true);
          openModal();
        });
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        ref={searchInputRef}
        onChange={searchProducts}
        onKeyDown={handleEnterPress}
        placeholder="Search..."
        className="border p-2 w-24 ml-7 h-6 hidden sm:block "
      />
      <button onClick={toggleSearch} className="text-white px-4 py-2 rounded">
        <FcSearch size={30} />
      </button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <SearchResults results={searchResults} />
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default SearchBar;
