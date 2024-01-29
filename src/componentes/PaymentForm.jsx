import React, { useState } from 'react';

const CardInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>
  );
};

const PaymentForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [ccv, setCcv] = useState('');

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar lógica de validación y procesamiento de pago
    // Puedes usar librerías como `card-validator` para validar la tarjeta
    onSubmit({ cardNumber, expiryDate, ccv });
  };

  return (
    <form onSubmit={handlePaymentSubmit}>
      <CardInput label="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      <CardInput label="Expiry Date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
      <CardInput label="CCV" value={ccv} onChange={(e) => setCcv(e.target.value)} />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Submit Payment
      </button>
    </form>
  );
};

export default PaymentForm;