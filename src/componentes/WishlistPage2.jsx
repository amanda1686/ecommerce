// Catalog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/products'); // Ajusta la ruta del archivo JSON según tu estructura de carpetas
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    // Lógica para añadir al carrito...
  };

  const toggleWishlist = (product) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter((productId) => productId !== product.id));
    } else {
      setWishlist([...wishlist, product.id]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((id) => id !== productId));
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-3xl text-center font-semibold mb-4">Lista de Deseos</h1>

  {/* Lista de Deseos */}
  <ul className="flex flex-wrap -m-4">
    {wishlist.map((productId) => (
      <li key={productId} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        {products.map((product) =>
          product.id === productId ? (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md mb-2">
              <Link to={`/Productdetails?product=${encodeURIComponent(JSON.stringify(product))}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto object-cover mb-2 cursor-pointer"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">€{product.price.toFixed(2)}</p>
              </Link>
              <div className="mt-2 flex items-center space-x-4">
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`text-gray-700 ${
                    wishlist.includes(product.id) ? 'text-red-500' : 'hover:text-red-500'
                  }`}
                >
                  {wishlist.includes(product.id) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-red-500" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-blue-500" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-gray-700 hover:text-red-500"
                >
                  Quitar de la lista
                </button>
              </div>
            </div>
          ) : null
        )}
      </li>
    ))}
  </ul>
</div>

  );
};

export default Catalog;
