import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cart, total } = location.state;

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar la información del formulario
    console.log('Información de envío:', shippingInfo);
    // Puedes enviar esta información al servidor o realizar otras acciones necesarias
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6">Resumen de compra</h1>
      <ul className="mb-4">
        {cart.map((product, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p>Precio: {product.price.toFixed(2)} €</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold mb-4">Total: {total.toFixed(2)}€</p>

      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Nombre:</span>
          <input
            type="text"
            name="name"
            value={shippingInfo.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Dirección:</span>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Correo electrónico:</span>
          <input
            type="email"
            name="email"
            value={shippingInfo.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Procesar pedido
        </button>
      </form>
    </div>
  );
};

export default Checkout;

