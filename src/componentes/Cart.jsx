import React, { useState } from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      {/* ... (código previo) */}

      {/* Resto del contenido del carrito */}
      {cart.length === 0 ? (
        <p>Tu carro está vacío</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
              {/* Muestra detalles del producto */}
              <p>{product.name} - Cantidad: {product.quantity}</p>
              {/* ... (otros detalles del producto) */}
              {/* Agrega el botón para quitar el producto del carrito */}
              <button onClick={() => removeFromCart(index)}>Quitar del carrito</button>
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
          <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
          {/* Muestra los productos en la barra lateral */}
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
              <p>{product.name} - Cantidad: {product.quantity}</p>
              {/* ... (otros detalles del producto) */}
              <button onClick={() => removeFromCart(index)}>Quitar del carrito</button>
            </div>
          ))}
          {/* Botón que cierra la barra lateral */}
          <button onClick={() => setSidebarOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
