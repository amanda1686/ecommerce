import React, { useState, useRef, useEffect } from 'react';
import { FcSearch } from 'react-icons/fc';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import SearchResults from './SearchResults';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchBar = () => {
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
      const term = searchInputRef.current.value.toLowerCase();
      const response = await fetch('http://localhost:3001/products');
      const productos = await response.json();

      const resultados = productos.filter((producto) => producto.name.toLowerCase().includes(term));
      setSearchResults(resultados);
      setSearchVisible(true);
      openModal();
    }
  };

 
  return (
    <div className="flex items-center p-5">
      <div className="flex items-center bg-gray-200 rounded-md p-1">
        <AiOutlineSearch size={20} style={{ color: 'gray', marginLeft: '5px' }} />
        <input
          type="text"
          ref={searchInputRef}
          onChange={searchProducts}
          onKeyDown={handleEnterPress}
          placeholder="Search..."
          className="bg-transparent ml-2 outline-none border-none text-sm p-1"
          style={{ width: '100px', height: '20px' }}
        />
      </div>

      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
        <div style={modalContentStyles}>
          <div style={headerStyles}>
            <h2 style={modalTitleStyles}>Search Results</h2>
            <button onClick={closeModal} style={closeButtonStyles}>
              <FaTimes style={{ marginRight: '5px' }} className="bg-sky-950 text-white px-4 py-2 rounded-md hover:bg-amber-500" />
              Close
            </button>
          </div>
          <SearchResults results={searchResults}/>
        </div>
      </Modal>
    </div>
  );
};


const modalStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '800px',
    height: '90%',
    maxHeight: '600px',
    padding: '20px',
    backgroundColor: 'white',
    outline: 'none',
    overflow: 'auto',
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

const modalTitleStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
  color: '#333',
};

const closeButtonStyles = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
};

export default SearchBar;