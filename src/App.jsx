import React from "react";
import "./App.css";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Productounico from "./pages/Productdetails";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Footer from "./componentes/Footer";
import { CartProvider } from "./context/CartContext";
import Wish from "./pages/Wish"; 
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Catalog from './componentes/Catalog';
import Services from "./pages/Services";
import Date from "./pages/Date";
import NavRegister from "./componentes/NavRegister";



function App() {
  return (
    <BrowserRouter>
      <NavRegister/>
      <NavBar />
        <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productdetails" element={<Productounico />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Wish" element={<Wish />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Catalog />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Date" element={<Date />} />
      </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
