import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function Catalog() {
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
      const response = await fetch('.../../data/data.json');
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
      <h1 className="text-3xl text-center font-semibold mb-4">Productos</h1>


      {/* Catálogo de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
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
              <input
                type="number"
                value={quantities[product.id] || 1}
                onChange={(e) =>
                  setQuantities((prevQuantities) => ({
                    ...prevQuantities,
                    [product.id]: parseInt(e.target.value, 10) || 1,
                  }))
                }
                className="border border-gray-300 px-2 py-1 w-16"
              />
              <button
                onClick={() => addToCart(product)}
                className="bg-sky-950 text-white px-4 py-2 rounded-md hover:bg-amber-500"
              >
                Añadir
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`text-gray-700 ${
                  wishlist.includes(product.id) ? 'text-red-500' : 'hover:text-red-500'
                }`}
              >
                {wishlist.includes(product.id) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-red-500" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-blue-500" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination itemsPerPage={itemsPerPage} totalItems={products.length} currentPage={currentPage} paginate={paginate} />
    </div>
  );
}

export default Catalog;
