import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import CartButton from './CartButton';

const Catalog = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const itemsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    const newTotal = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  }, [wishlist, cart]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 bg-gray-200 rounded-md ${selectedCategory === 'todos' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('todos')}
        >
          Todos
        </button>
        <button
          className={`px-4 py-2 bg-gray-200 rounded-md ${selectedCategory === 'celiacos' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('celiaco')}
        >
          Celíaco
        </button>
        <button
          className={`px-4 py-2 bg-gray-200 rounded-md ${selectedCategory === 'frutos' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('frutos')}
        >
          Frutos
        </button>
        <button
          className={`px-4 py-2 bg-gray-200 rounded-md ${selectedCategory === 'lacteos' && 'bg-blue-500 text-white'}`}
          onClick={() => handleCategoryChange('lacteos')}
        >
          Lácteos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products
          .filter(product => selectedCategory === 'todos' || product.category === selectedCategory)
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <Link to={`/Productdetails?product=${encodeURIComponent(JSON.stringify(product))}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-auto object-cover mb-2 cursor-pointer"
                />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.price.toFixed(2)} €</p>
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

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />

      {isCartVisible && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4">
          <button
            onClick={() => setIsCartVisible(false)}
            className="text-red-500 text-xl font-semibold mb-4"
          >
            Cerrar
          </button>
          <h2 className="text-xl font-semibold mb-4">Resumen de compra</h2>
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <p>{product.name}</p>
                <div className="flex items-center">
                  <button onClick={() => removeFromCart(product.id)} className="text-red-500 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 fill-current text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l1 12h12l1-12H3zm9 3V3m-4 0v6m8 0V3m-8 0h6m-6 0H3m4 6v12m8-12v12"
                      />
                    </svg>
                  </button>
                  <button onClick={() => decreaseQuantity(product.id)} className="text-blue-500">
                    -
                  </button>
                </div>
              </div>
              <p>Precio: {product.price.toFixed(2)} €</p>
              <p>Cantidad: {product.quantity} €</p>
            </div>
          ))}
          <div className="text-xl font-semibold mb-2">Total: {total.toFixed(2)}€</div>
          <button
            onClick={finishPurchase}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;


