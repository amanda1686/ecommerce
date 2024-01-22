import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: darkMode ? '#333' : 'transparent',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      <button onClick={toggleDarkMode}>
         Dark Mode
      </button>
        <MdDarkMode size={40} />
      
    </div>
  );
}

export default DarkMode;
