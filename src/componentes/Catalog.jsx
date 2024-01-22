import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { useCart } from '../context/CartContext';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [isCartVisible, setIsCartVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('.../../data/data.json');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    setQuantity(1);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-semibold mb-4">Products</h1>
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
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </Link>
            <div className="mt-2 flex items-center space-x-4">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                className="border border-gray-300 px-2 py-1 w-16"
              />
              <button
                onClick={() => addToCart(product)}
                className="bg-sky-950 text-white px-4 py-2 rounded-md hover:bg-amber-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
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

export default Catalog;









