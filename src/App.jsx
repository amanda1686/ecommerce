import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Productounico from "./pages/Productdetails";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage"; // DZ
import Footer from "./componentes/Footer";
import { CartProvider } from "./context/CartContext"; // DZ

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {" "}
        {/* Agrega el CartProvider aquí */}
        <Navbar />
        <Routes>
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Productdetails" element={<Productounico />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/Cart' element={<CartPage />} />  {/*  ruta para CartPage DZ */}
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
