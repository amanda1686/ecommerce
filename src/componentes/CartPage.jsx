// import React from "react";
// import Cart from "../componentes/Cart"; // DZ

// const CartPage = () => {
//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Tu Carrito de Compras</h2>
//       <Cart />
//     </div>
//   );
// };

// export default CartPage;


{/* Lista de Deseos */}
<div className="mt-4">
<h2 className="text-xl font-semibold mb-2">Lista de Deseos</h2>
<ul>
  {wishlist.map((productId) => (
    <li key={productId}>
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