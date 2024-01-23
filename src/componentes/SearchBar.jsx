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

  const handleEnterPress = async (e) => {
    if (e.key === 'Enter') {
      // Realiza la búsqueda aquí con searchTerm
      const term = searchInputRef.current.value.toLowerCase();
      // Aquí debes ajustar la ruta correcta para obtener tu archivo JSON
      const response = await fetch('/public/data/data.json');
      const productos = await response.json();

      const resultados = productos.filter((producto) => producto.name.toLowerCase().includes(term));
      setSearchResults(resultados);
      setSearchVisible(true);
      openModal();
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

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
        <div style={modalContentStyles}>
          <div style={headerStyles}>
            <h2>Search Results</h2>
            <button onClick={closeModal} style={closeButtonStyles}>
              X
            </button>
          </div>
          <SearchResults results={searchResults} />
        </div>
      </Modal>
    </div>
  );
};

// Estilos en línea
const modalStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Ajusta el ancho según tus necesidades
    maxWidth: '600px', // Ajusta el ancho máximo según tus necesidades
    padding: '20px',
    backgroundColor: 'white',
    outline: 'none',
  },
};

const modalContentStyles = {
  display: 'flex',
  flexDirection: 'column',
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
};

const closeButtonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#333', // Ajusta el color según tus necesidades
};

export default SearchBar;
