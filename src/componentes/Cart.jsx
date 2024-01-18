import React, { useState } from "react";
import Product from "../componentes/Product";
import data from "../../public/data/data.json";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product }]);
    setTotalItems(totalItems + 1);
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <p>Total de Artículos: {totalItems}</p>
      <div className="products">
        {data.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      {/* Otras secciones del carrito */}
    </div>
  );
};

export default Cart;
