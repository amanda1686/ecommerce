import React, { useState, useEffect } from 'react';
import data from '../../public/data/data.json';
import Pagination from './Pagination';

const itemsPerPage = 8;

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Asigna los datos al estado
    setProducts(data);
  }, []); 

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-black text-4xl font-bold">Productos</h2>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md shadow-lg shadow-indigo-400 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                <img
                  src={product.img}
                  alt={product.img}
                  className="h-48 w-48 object-cover object-center lg:h-48 lg:w-48 ml-10 mt-10"
                />
                <div className="mt-4 flex justify-center">
                <div className='font-bold'>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className='flex'>
                  <button className='flex bg-sky-950 text-white text-md px-6 py-1 mt-3 hover:bg-amber-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      Add
                    </button>
                <p className="text-md  ml-4 mt-4 font-bold text-gray-900">{product.price}.€</p>                     
                  </div>
                 
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}



