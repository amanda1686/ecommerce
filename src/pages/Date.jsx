import React, { useState, useEffect } from 'react';
import abuela from '../assets/imagenes/abuela.jpg';
import charla from '../assets/imagenes/charla.jpg';
import limpieza from '../assets/imagenes/limpieza.jpg';

const Date = () => {
  const [products, setProducts] = useState([]);

  const servicioData = [
    { image: abuela, description: 'Servicio de cuidado de abuelos' },
    { image: charla, description: 'Servicio de charlas y eventos' },
    { image: limpieza, description: 'Servicio de limpieza y mantenimiento' },
  ];


  // Simulación de la obtención de datos de la API
  useEffect(() => {
    // Simulación de productos desde la API (limitado a 4)
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(0, 4)));  // Limitar a 4 productos
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de perfil"
          className="h-20 w-20 rounded-full mb-4"
        />
        <h1 className="text-3xl font-semibold">Nombre: Pedro</h1>
        <p className="text-gray-500">Edad: 70 años</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Información Adicional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-semibold mb-2">Lugar de Residencia</p>
            <p></p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Teléfono</p>
            <p></p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Dirección</p>
            <p></p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Código Postal</p>
            <p></p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-2">Ciudad</p>
            <p></p>
          </div>
          {/* Puedes agregar más campos según tus necesidades */}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-md">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-lg font-semibold mb-2">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
          {servicioData.map((servicio, index) => (
            <div key={index} className="flex items-start mb-8">
              <div className="flex-shrink-0 mr-4">
                <img
                  src={servicio.image}
                  className="w-32 h-32 object-cover rounded-md"
                  alt={`Servicio ${index + 1}`}
                />
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">{servicio.description}</p>
                <p>Número de sesiones: 10</p>
                <p>Sesiones restantes: 7</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Date;

