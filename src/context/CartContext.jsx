// // CartContext.jsx
// import React, { createContext, useState, useContext, useEffect } from "react";

// // Crea el contexto
// const CartContext = createContext();

// // Crea el proveedor del contexto
// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Funciones para manejar el carrito
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === productId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   // Ejemplo: cargar el carrito desde el almacenamiento local al inicio
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Ejemplo: guardar el carrito en el almacenamiento local cuando cambia
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Función utilitaria para acceder al contexto en componentes hijos
// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// // Exporta directamente los elementos que necesitas sin el objeto con la propiedad 'default'
// export { CartProvider, useCart, CartContext };
