// Cuadros.js
import React from 'react';

const Cuadro = ({ children }) => (
  <div className="w-24 h-24 bg-blue-500 m-2 flex items-center justify-center">
    {children}
  </div>
);

const Cuadros = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* 2 cuadrados centrales */}
      <div className="flex">
        <Cuadro>
          <div>Contenido Cuadro 1</div>
        </Cuadro>
        <Cuadro>
          <div>Contenido Cuadro 2</div>
        </Cuadro>
      </div>

      {/* 4 cuadrados debajo */}
      <div className="flex mt-4">
        <Cuadro>
          <div>Contenido Cuadro 3</div>
        </Cuadro>
        <Cuadro>
          <div>Contenido Cuadro 4</div>
        </Cuadro>
        <Cuadro>
          <div>Contenido Cuadro 5</div>
        </Cuadro>
        <Cuadro>
          <div>Contenido Cuadro 6</div>
        </Cuadro>
      </div>
    </div>
  );
};

export default Cuadros;