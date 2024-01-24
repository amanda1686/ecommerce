import React from 'react';
import ShoppingCart from '../../public/img/logo/shopping-cart.png';

const CartButton = ({ onClick, cartCount }) => {
  return (
    <button onClick={onClick} className="text-blue-500 text-xl font-semibold relative">
      <img src={ShoppingCart} alt="" className="bg-black" />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;

