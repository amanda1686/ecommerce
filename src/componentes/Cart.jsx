import React, { useEffect } from 'react';

const Cart = () => {
  useEffect(() => {
    const cartItems = document.querySelector(".cart-items");
    const totalAmount = document.querySelector(".total-amount");
    const clearCartBtn = document.querySelector(".clear-cart");
    const continueShoppingBtn = document.querySelector(".continue-shopping");
    const cartAmount = document.getElementById("cart-amount");

    const renderizarCarrito = () => {
      cartItems.innerHTML = "";
      let total = 0;

      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.forEach((item) => {
        const li = document.createElement("li");

        const image = document.createElement("img");
        const numeroProducto = item.nombre.split(" ")[1];

        let imageUrl = `../img/happy${numeroProducto}.svg`;
        if (item.nombre === "HappyZ Flip") {
          imageUrl = `../img/happy.svg`;
        }
        image.src = imageUrl;
        image.alt = `${item.nombre} image`;
        image.classList.add("product-image");
        li.appendChild(image);

        const itemInfo = document.createElement("div");
        itemInfo.textContent = `${item.nombre} x ${
          item.cantidad
        } - ${formatCurrency(item.precio * item.cantidad)}`;
        li.appendChild(itemInfo);

        cartItems.appendChild(li);
        total += item.precio * item.cantidad;
      });

      totalAmount.textContent = formatCurrency(total);
      updateCartCounter();
    };

    const updateCartCounter = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
      cartAmount.textContent = totalItems;
    };

    const formatCurrency = (amount) => {
      return amount.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR",
      });
    };

    renderizarCarrito();

    clearCartBtn.addEventListener("click", () => {
      localStorage.removeItem("carrito");
      alert("Carrito vaciado.");
      renderizarCarrito();
      updateCartCounter();
    });

    continueShoppingBtn.addEventListener("click", () => {
      // Utiliza react-router o el enrutamiento de tu elección en lugar de window.location.href
      window.location.href = "../index.html";
    });

    // Limpia los event listeners al desmontar el componente
    return () => {
      clearCartBtn.removeEventListener("click", () => {});
      continueShoppingBtn.removeEventListener("click", () => {});
    };
  }, []); // El segundo argumento vacío indica que useEffect solo se ejecuta una vez al montar el componente

  return (
    <div>
      <ul className="cart-items">
        {/* Los elementos del carrito se renderizan aquí dinámicamente */}
      </ul>
      <div className="total-amount">
        {/* El total del carrito se renderiza aquí dinámicamente */}
      </div>
      <button className="clear-cart">Vaciar Carrito</button>
      <button className="continue-shopping">Continuar Comprando</button>
    </div>
  );
};

export default Cart;
