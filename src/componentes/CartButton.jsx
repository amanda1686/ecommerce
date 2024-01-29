import React from 'react';
import shoppingcart from '../../public/img/logo/cart.svg';

const CartButton = ({ onClick, cartCount }) => {
  return (
    <button onClick={onClick} className="font-semibold relative">
      <img src={shoppingcart} alt="" className="h-8 w-8 mr-4" />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
