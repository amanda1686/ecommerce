import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.img} alt={`Imagen de ${product.name}`} />
      <div className="product-txt">
        <h3>{product.name}</h3>
        <p className="precio">{product.price}€</p>
        <div className="cantidad-controles">
          <button onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;