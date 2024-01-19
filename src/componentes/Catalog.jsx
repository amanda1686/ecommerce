import React, { useState, useEffect } from "react";
import data from "../../public/data/data.json";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleAddToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const handleAddToWishlist = (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);

    if (!isProductInWishlist) {
      setWishlist([...wishlist, { ...product }]);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Productos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border p-4">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-sm text-gray-700 mb-2">{product.name}</h3>
                  <p className="text-sm font-medium text-gray-900">{product.price}.€</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        handleAddToCart(product, 1);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                    >
                      Añadir al Carrito
                    </button>
                    <button
                      onClick={() => {
                        handleAddToWishlist(product);
                      }}
                      className="text-gray-700 hover:text-red-500 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21l5-5m5-5L7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}