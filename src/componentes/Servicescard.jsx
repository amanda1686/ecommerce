import React from 'react';
import abuela from '../assets/imagenes/abuela.jpg';
import charla from '../assets/imagenes/charla.jpg';
import limpieza from '../assets/imagenes/limpieza.jpg';



export default function Servicescard() {
  const images = [
    abuela, // Utiliza la variable abuela directamente
    charla,
    limpieza,
  ];

  return (
    <>
      <h1 className='text-center text-black text-4xl font-bold mt-10 gap-10 ml-auto py-5'>Servicios</h1>
      <div className="flex justify-center items-center space-x-4 ">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagen ${index + 1}`}
            className="rounded-lg h-[250px]"
          />
        ))}
      </div>
      <br />
    </>
  );
}
