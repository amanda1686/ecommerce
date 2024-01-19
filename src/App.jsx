import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Productounico from "./pages/Productdetails";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Cart from "./componentes/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Productdetails" element={<Productounico />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />{" "}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
