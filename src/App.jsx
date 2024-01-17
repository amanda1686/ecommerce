import React from 'react'
import './App.css'
import Navbar from './componentes/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/productos'
import Login from './pages/login'
import Producto_unico from './pages/producto_unico'


function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/productos' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/producto_unico' element={<Producto_unico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
