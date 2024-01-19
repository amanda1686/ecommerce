import React, { useState } from "react";
import Product from "../componentes/Product";
import data from "../../public/data/data.json";
import CartModal from '../componentes/CartModal';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Carrito de Compras</h2>
      <p className="mb-4">Precio Total: ${totalPrice.toFixed(2)}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <button onClick={openModal}>Ver Carrito</button>
      <CartModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        cartItems={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default Cart;