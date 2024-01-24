import React from "react";
import "./App.css";
import Navbar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Productounico from "./pages/Productdetails";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Footer from "./componentes/Footer";
import { CartProvider } from "./context/CartContext";
import Wish from "./pages/Wish"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productdetails" element={<Productounico />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Wish" element={<Wish />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
