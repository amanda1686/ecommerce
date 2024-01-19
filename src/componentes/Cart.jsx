import React, { useState } from "react";
import Product from "../componentes/Product";
import data from "../../public/data/data.json";
import React, { useState } from "react";
import Product from "../componentes/Product";
import data from "../../public/data/data.json";
import CartModal from '../componentes/CartModal';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, { ...product }]);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <div className="products">
        {data.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

export default Cart;
