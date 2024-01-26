import React, { useState } from 'react';

import abuela from '../assets/imagenes/abuela.jpg';
import charla from '../assets/imagenes/charla.jpg';
import limpieza from '../assets/imagenes/limpieza.jpg';
import xicon from '../../public/img/logo/xicon.png';

const images = [abuela, charla, limpieza];

export default function Servicescard() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica del formulario
    console.log('Formulario enviado');
    closeModal(); // Cierra el modal después de enviar el formulario
  };

  return (
    <>
      <h1 className='text-center text-black text-4xl font-bold mt-10 gap-10 ml-auto py-5'>Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => openModal(imageUrl)}
          >
            <img
              src={imageUrl}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg w-full h-auto opacity-1 group-hover:opacity-50"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[#032940] text-lg font-semibold transition duration-300 opacity-0 group-hover:opacity-100">
                Más Información
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-screen-md w-full bg-white p-8 rounded-lg flex flex-col items-center">
            <p className="text-2xl font-bold mb-4">
              Nos ponemos en contacto contigo
            </p>
            <img
              src={selectedImage}
              alt="Imagen seleccionada"
              className="rounded-lg w-full h-auto mb-4"
            />
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <label className="block mb-4">
                Nombre:
                <input type="text" className="border rounded p-2 w-full" />
              </label>
              <label className="block mb-4">
                Correo Electrónico:
                <input type="email" className="border rounded p-2 w-full" />
              </label>
              <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-amber-500">
                Enviar
              </button>
            </form>
            <button
              type="button"
              className="absolute top-4 right-4 text-black"
              onClick={closeModal}
            >
              <img src={xicon} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}










