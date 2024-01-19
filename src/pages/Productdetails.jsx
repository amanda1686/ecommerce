// Productdetails.js

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Productdetails = () => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const productParam = urlParams.get('product');
  const product = productParam ? JSON.parse(decodeURIComponent(productParam)) : null;

  useEffect(() => {
    // Mostrar la información del producto en la página
    const productNameElement = document.getElementById('productName');
    const productPriceElement = document.getElementById('productPrice');
    const productImageElement = document.getElementById('productImage');
    const productDescriptionElement = document.getElementById('productDescription');

    // Verificar si los elementos existen antes de intentar asignar valores
    if (productNameElement && productPriceElement && productImageElement && productDescriptionElement && product) {
      productNameElement.textContent = product.name;  // Ajustar a product.name
      productPriceElement.textContent = `${product.price} €`; // Ajustar a product.price
      productImageElement.src = product.img;
      productDescriptionElement.textContent = `${product.description}`;
    }
  }, [product]);

  return (
    <div className='flex'>
      {/* Aquí puedes estructurar tu página de detalles del producto */}
      <img id="productImage" alt="" className='object-cover object-center lg:h-[550px] lg:w-[350px] ml-80 mt-20' />
      <ul>
        <li>
          <h1 id="productName" className='font-bold text-xl mt-40'></h1>
        </li>
        <li>
          <p id="productDescription" className='font-bold text-xl mt-10'></p>
        </li>
        <li>
          <h1 id="productPrice" className='font-bold text-xl mt-60'></h1>
        </li>
      </ul>
    </div>
  );
};

export default Productdetails;


