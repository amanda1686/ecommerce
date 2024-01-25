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
      productNameElement.textContent = product.name;
      productPriceElement.textContent = `${product.price} €`;
      productImageElement.src = product.img;
      productDescriptionElement.textContent = `${product.description}`;
    }
  }, [product]);

  return (
    <div className='flex p-8 border border-gray-300 shadow-lg'>
      {/* Imagen del producto */}
      <img id="productImage" alt="" className='object-cover object-center lg:h-[550px] lg:w-[350px] mr-8' />

      {/* Detalles del producto */}
      <div>
        <h1 id="productName" className='font-bold text-3xl mb-4'>{product ? product.name : ''}</h1>
        <p id="productDescription" className='text-lg mb-8'>{product ? product.description : ''}</p>
        <h1 id="productPrice" className='font-bold text-2xl'>{product ? `${product.price} €` : ''}</h1>
      </div>
    </div>
  );
};

export default Productdetails;



