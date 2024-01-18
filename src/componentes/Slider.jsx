import React from 'react'
import cocorallado from  '../assets/imagenes/coco-rallado.jpg'
import harinaalmendra from  '../assets/imagenes/harina-de-almendra.jpg'
import harinaarroz from  '../assets/imagenes/harina-de-arroz.jpg'
import harinaavena from  '../assets/imagenes/harina-de-avena.jpg'
import harinagarbanzo from  '../assets/imagenes/harina-de-garbanzo.jpg'
import lechealmendras from  '../assets/imagenes/leche-de-almendras.jpg'
import lechearroz from  '../assets/imagenes/leche-de-arroz.jpeg'
import lechecoco from  '../assets/imagenes/leche-de-coco.jpg'
import lechesoja from  '../assets/imagenes/leche-de-soja.jpg'
import semillascalabaza from  '../assets/imagenes/semillas-de-calabaza.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import ghands from '../assets/imagenes/logo/ghands.svg'





export default function Sliderproducts() {

  const settings ={
    dots: true,
    infinite:true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll: 3,
    slidesToScroll: 1
  };

  const data= [
    {
        "name": "Coco-rallado",
        "img": cocorallado,
      },
      {
        "name": "Harina de almendra",
        "img": harinaalmendra,
      },
      {
        "name": "Harina de arroz",
        "img": harinaarroz,
      },
      {
        "name": "Harina de avena",
        "img": harinaavena,
      },
      {
        "name": "Harina de garbanzo",
        "img": harinagarbanzo,
      },
      {
        "name": "Leche de almendras",
        "img": lechealmendras,
      },
      {
        "name": "Leche de arroz",
        "img": lechearroz,
      },
      {
        "name": "Leche de coco",
        "img": lechecoco,
      },
      {
        "name": "Leche de soja",
        "img": lechesoja,
      },
      {
        "name": "Semillas de calabaza",
        "img": semillascalabaza,
      }
]
  return (
    <>
    <div className='w-3/4  m-auto'>
        <div className="mt-5">
        <h1 className=' text-center  text-black text-4xl font-bold  mt-10 gap-10  py-5'>Productos</h1>

          <Slider {...settings}>
            {data.map((d)=>(
            <div className='text-back mb-4 bg-white  rounded-xl  border-1 border-sky-950 shadow-lg shadow-indigo-400'>
                <div className='ounded-t-xl flex justify-center items-center '>
                    <img src={d.img} alt="" className='h-[150px] mt-10'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-xl font-semibold'>{d.name}</p>
                    <a href="/Productdetails">
                    <button className=' flex bg-sky-950 text-white text-lg px-6 py-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                     </svg>
                     COMPRAR</button>
                    </a>

                </div>
            </div>
            ))}
           </Slider> 
           <br />
           <h1 className='text-center  text-black text-xl font-bold  py-5'><a href="/Product">VER TODOS</a></h1>
        </div>
    </div>
    </>
  )
}

