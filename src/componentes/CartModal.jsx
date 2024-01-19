import React from 'react';

const CartModal = ({ isOpen, closeModal, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <p>Descripción: {product.description}</p>
        <button onClick={closeModal} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4">
          Cerrar Detalles
        </button>
      </div>
    </div>
  );
};

export default CartModal;