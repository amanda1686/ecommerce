import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  console.log(cart);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Carro de compra</h1>

      {/* Botón que abre la barra lateral */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="focus:outline-none"
      >
        <img src={shoppingcart} alt="" className="h-8 w-8 mr-4" />
      </button>

      {/* Resto del contenido del carrito */}
      {cart.length === 0 ? (
        <p>Tu carro está vacío</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow-md rounded-md mb-4"
            >
              <p>
                {product.name} - Cantidad: {product.quantity}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500"
              >
                Eliminar del carrito
              </button>
            </div>
          ))}

          <div className="mt-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Limpiar carrito
            </button>
            <p className="text-xl font-semibold">
              Total: $
              {cart
                .reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
                .toFixed(2)}
            </p>
            {/* Agrega el botón de pago u otras acciones aquí */}
          </div>
        </div>
      )}

      {/* Barra lateral */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow-md rounded-md mb-4"
            >
              <p>
                {product.name} - Cantidad: {product.quantity}
              </p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500"
              >
                Eliminar del carrito
              </button>
            </div>
          ))}

          <button
            onClick={() => setSidebarOpen(false)}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
