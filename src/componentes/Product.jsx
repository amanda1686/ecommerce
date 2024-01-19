import React, { useState } from "react";

const Product = ({ product, onAddToCart, onAddToWishlist }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    // Reset the quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>

      {/* Quantity input */}
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
        />
      </div>

      {/* Add to Cart button */}
      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* Add to Wishlist button */}
      <button onClick={() => onAddToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default Product;
