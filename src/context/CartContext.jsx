import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        const newState = [...state];
        newState[existingProductIndex].quantity += action.payload.quantity;
        return newState;
      } else {
        return [...state, action.payload];
      }

    case 'REMOVE_FROM_CART':
      const updatedCart = state.filter(item => item.id !== action.payload.id);
      return updatedCart;

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};

export { CartProvider, useCart };