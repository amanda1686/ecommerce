import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { cart, total } = location.state;
  
    console.log('Cart:', cart);
    console.log('Total:', total);
  
    return (
      <div>
        <h1>Resumen de compra</h1>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <p>{product.name}</p>
              <p>Precio: {product.price.toFixed(2)} €</p>
              <p>Cantidad: {product.quantity}</p>
            </li>
          ))}
        </ul>
        <p>Total: {total.toFixed(2)}€</p>
      </div>
    );
  };
  

export default Checkout;
