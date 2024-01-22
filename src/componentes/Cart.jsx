import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  // Estado para controlar si la barra lateral está abierta o cerrada
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>

      {/* Botón que abre la barra lateral */}
      <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
        <img src={shoppingcart} alt="" className='h-8 w-8 mr-4'/>
      </button>

      {/* Resto del contenido del carrito */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
              {/* ... (contenido del producto) */}
            </div>
          ))}

          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
            </p>
            {/* Agrega el botón de pago u otras acciones aquí */}
          </div>
        </div>
      )}

      {/* Barra lateral */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4">
          {/* Contenido de la barra lateral, por ejemplo, resumen del carrito */}
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {/* Agrega aquí contenido adicional, como resumen del carrito */}
          
          {/* Botón que cierra la barra lateral */}
          <button onClick={() => setSidebarOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
            Close Sidebar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

