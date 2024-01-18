import React from 'react'
import './App.css'
import Navbar from './componentes/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/productos'
import Login from './pages/login'
import Producto_unico from './pages/producto_unico';
import Carousel from './componentes/Carousel';
import Img from './componentes/slider1.jpg';

const slides = [ Img ]


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <div>
        
      </div>
      <div 
      className="overflow-hidden relative"
      // className='max-w-lg'
      >
        <Carousel autoSlide='true'>
          {slides.map((s)=> (
            <img src={s}/>
            // <img src={Img}/>
          ))}
        </Carousel>
      </div>
      <Routes>
        <Route path='/productos' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/producto_unico' element={<Producto_unico />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
