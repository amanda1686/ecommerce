<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  // Estado para controlar si la barra lateral está abierta o cerrada
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>

      {/* Botón que abre la barra lateral */}
      <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
        {/* Importa la imagen correcta o utiliza otro elemento para representar el carrito */}
        <img src={shoppingcart} alt="" className='h-8 w-8 mr-4'/>
      </button>

      {/* Resto del contenido del carrito */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
              {/* ... (contenido del producto) */}
              <p>{product.name} - Quantity: {product.quantity} - Price: ${product.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            </div>
          ))}

          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
            </p>
            {/* Agrega el botón de pago u otras acciones aquí */}
          </div>
        </div>
      )}

      {/* Barra lateral */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-1/4 bg-gray-200 p-4">
          {/* Contenido de la barra lateral, por ejemplo, resumen del carrito */}
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {/* Agrega aquí contenido adicional, como resumen del carrito */}
          
          {/* Botón que cierra la barra lateral */}
          <button onClick={() => setSidebarOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
            Close Sidebar
          </button>
        </div>
      )}
>>>>>>> parent of 735fe45 (update)
    </div>
  );
};

<<<<<<< HEAD
export default Cart;
=======
export default CartPage;

>>>>>>> parent of 735fe45 (update)
