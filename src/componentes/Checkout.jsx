import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { cart, total } = location.state;

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    ccv: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!shippingInfo.name.trim()) {
      errors.name = "Nombre es obligatorio";
    }
    if (!shippingInfo.email.trim()) {
      errors.email = "Correo electrónico es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingInfo.email)) {
      errors.email = "Correo electrónico no válido";
    }
    if (!shippingInfo.cardNumber.trim()) {
      errors.cardNumber = "Número de tarjeta es obligatorio";
    }
    if (!shippingInfo.expiryDate.trim()) {
      errors.expiryDate = "Fecha de expiración es obligatoria";
    }
    if (!shippingInfo.ccv.trim()) {
      errors.ccv = "CCV es obligatorio";
    }
    if (!shippingInfo.address.trim()) {
      errors.address = "Dirección es obligatoria";
    }
    if (!shippingInfo.city.trim()) {
      errors.city = "Ciudad es obligatoria";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Información de envío y pago:", shippingInfo);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShippingInfo({
      name: "",
      address: "",
      city: "",
      email: "",
      cardNumber: "",
      expiryDate: "",
      ccv: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Resumen de compra</h1>
      <ul className="mb-4">
        {cart.map((product, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b"
          >
            <div>
              <p className="font-semibold">{product.name}</p>
              <p>Precio: {product.price.toFixed(2)} €</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-3xl font-bold mb-9 text-center">
        Total a Pagar: {total.toFixed(2)}€
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.name ? "border-red-500" : ""
              }`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              value={shippingInfo.email}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de tarjeta:
            </label>
            <input
              type="text"
              name="cardNumber"
              value={shippingInfo.cardNumber}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.cardNumber ? "border-red-500" : ""
              }`}
              required
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm">{errors.cardNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Fecha de expiración:
            </label>
            <input
              type="text"
              name="expiryDate"
              value={shippingInfo.expiryDate}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.expiryDate ? "border-red-500" : ""
              }`}
              required
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">{errors.expiryDate}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CCV:
            </label>
            <input
              type="text"
              name="ccv"
              value={shippingInfo.ccv}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.ccv ? "border-red-500" : ""
              }`}
              required
            />
            {errors.ccv && <p className="text-red-500 text-sm">{errors.ccv}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dirección:
            </label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.address ? "border-red-500" : ""
              }`}
              required
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ciudad:
          </label>
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            className={`mt-1 p-2 w-full border rounded-md ${
              errors.city ? "border-red-500" : ""
            }`}
            required
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <img
            src="/../../public/img/logo/mastercard.svg"
            alt="Mastercard"
            className="h-8 w-auto"
          />
          <img
            src="../../public/img/logo/visa.svg"
            alt="Visa"
            className="h-8 w-auto"
          />
          <img
            src="../../public/img/logo/paypal.svg"
            alt="Paypal"
            className="h-8 w-auto"
          />
          <img
            src="../../public/img/logo/stripe.svg"
            alt="Stripe"
            className="h-8 w-auto"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150 mx-auto"
          >
            Procesar pedido
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <p className="text-xl font-bold mb-4">
              ¡Pedido realizado con éxito!
            </p>
            <p>Te enviaremos en breve el resumen de compra a tu correo.</p>
            <p>¡Gracias por la compra!</p>
            <button
              className="mt-4 bg-gradient-to-r from-[#d88530] via-[#f2cb79] to-[#f2df80] text-[#032940] font-bold py-2 px-4 rounded-md hover:from-[#f2df80] hover:via-[#f2cb79] hover:to-[#d88530] transition ease-in-out duration-150 mx-auto"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
