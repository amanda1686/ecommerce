import React from "react";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-black text-4xl font-bold mb-8">
          Carrito de Compras
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">El carrito está vacío.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="text-md font-bold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x {item.price}.€
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    className="text-red-600 hover:underline mr-4"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                  <div className="flex items-center">
                    <button
                      className="text-gray-700 hover:underline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button
                      className="text-gray-700 hover:underline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <p className="text-lg font-bold text-gray-800">
                Total: {calculateTotal().toFixed(2)}€
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
