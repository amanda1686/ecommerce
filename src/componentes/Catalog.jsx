import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('.../../data/data.json');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Calcular el total cada vez que se actualiza el carrito
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantities[product.id] }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: quantities[product.id] }]);
    }

    setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: 1 }));
    setIsCartVisible(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
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
              <p>{product.name}</p>
              <p>Precio: ${product.price.toFixed(2)}</p>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => removeFromCart(index)} className="text-red-500">
                Quitar del carrito
              </button>
            </div>
          ))}
          <div className="text-xl font-semibold mb-2">Total: ${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}

export default Catalog;













