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
  const itemsPerPage = 8;
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtén la URL base de la API desde la variable de entorno
        const apiUrl = process.env.REACT_APP_GOLDEN_APP_API_URL || 'http://localhost:3001';
        console.log('API URL:', apiUrl);
        
        const response = await axios.get(`${apiUrl}/products`);
        console.log('Response Data:', response.data);
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);      
  
  useEffect(() => {
    // Guardar el estado de la lista de deseos en localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Calcular el total cada vez que se actualiza el carrito
    const newTotal = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  }, [wishlist, cart]);

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(product.id)) {
        return prevWishlist.filter((productId) => productId !== product.id);
      } else {
        return [...prevWishlist, product.id];
      }
    });
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const quantityToAdd = parseInt(quantities[product.id], 10) || 1;

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: quantityToAdd }]);
    }

    setTotal((prevTotal) => prevTotal + product.price * quantityToAdd);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: 1 }));
    setIsCartVisible(true);
  };

  const finishPurchase = () => {
    console.log('Cart:', cart);
    console.log('Total:', total);

    // Lógica para finalizar la compra
    navigate('/checkout', { state: { cart, total } });
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    // También es recomendable actualizar el total aquí
    const newTotal = updatedCart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCart);
    recalculateTotal(updatedCart);
  };

  const recalculateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-semibold mb-4">Productos</h1>

      {/* Catálogo de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts && Array.isArray(currentProducts) ? (
          currentProducts.map((product) => (
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
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        currentPage={currentPage}
        paginate={paginate}
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

      <CartButton
        onClick={() => setIsCartVisible(!isCartVisible)}
        cartCount={cart.length}
        cartItems={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        finishPurchase={finishPurchase}
        total={total}
      />
    </div>
  );
};

export default Catalog;


