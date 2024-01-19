import React, { useState, useEffect } from "react";
import data from "../../public/data/data.json";
import CartModal from "../components/CartModal";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleAddToCart = (product, quantity) => {
    const updatedCart = [...cart, { ...product, quantity }];
    setCart(updatedCart);
  };

  const handleAddToWishlist = (product) => {
    const updatedWishlist = [...wishlist, { ...product }];
    setWishlist(updatedWishlist);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Productos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.img}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="mr-2 border border-gray-300 rounded-md p-1 w-12 text-center"
                  />
                  <button
                    onClick={() => {
                      handleAddToCart(product, 1); // Si necesitas cambiar la cantidad, ajusta este valor
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                  >
                    Añadir al Carrito
                  </button>
                  <button
                    onClick={() => {
                      handleAddToWishlist(product);
                    }}
                    className="text-gray-700 hover:text-red-500"
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
                  <button onClick={() => openModal(product)}>
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <CartModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
