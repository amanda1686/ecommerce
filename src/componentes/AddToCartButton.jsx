import React from 'react';

const AddToCartButton = ({ product, addToCart }) => {
  const handleClick = () => {
    addToCart(product);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-sky-950 text-white px-4 py-2 rounded-md hover:bg-amber-500"
    >
      Añadir al carrito
    </button>
  );
};

export default AddToCartButton;
