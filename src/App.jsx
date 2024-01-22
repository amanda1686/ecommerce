import React from 'react'
import './App.css'
import Navbar from './componentes/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Productounico from './pages/Productdetails'
import Aboutus from './pages/Aboutus'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
     
   
      <Routes>
        <Route path='/Product' element={<Product />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Login2' element={<Login2 />} />
        <Route path='/Productdetails' element={<Productounico />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
