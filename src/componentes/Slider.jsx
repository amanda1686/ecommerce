import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Link } from 'react-router-dom';

export default function Sliderproducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../public/data/data.json');
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const jsonData = await response.json();
        const firstFiveItems = jsonData.slice(0, 5);
        setData(firstFiveItems);
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    fetchData();
  }, []);

  // Función para redirigir a la página de detalles del producto
  const openProductDetailsPage = (product) => {
    // Construye la URL de la página de detalles del producto
    const productDetailsURL = `/Productdetails?product=${encodeURIComponent(JSON.stringify(product))}`;

    // Redirige a la nueva URL
    window.location.href = productDetailsURL;
  };

  return (
    <>
      <div className='w-3/4 m-auto'>
        <div className='mt-5'>
          <h1 className='text-center text-black text-4xl font-bold mt-10 gap-10 py-5'>Productos</h1>

          <Slider {...settings}>
            {data.map((product) => (
              <div key={product.name} className='text-black mb-4 bg-white rounded-xl border-1 border-sky-950 shadow-lg shadow-indigo-400'>
                <div onClick={() => openProductDetailsPage(product)} className='rounded-t-xl flex justify-center items-center cursor-pointer'>
                  <img src={product.img} alt="" className='h-[150px] mt-10'/>
                </div>

                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold'>{product.name}</p>
                  <button className='flex bg-sky-950 text-white text-lg px-6 py-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    BUY
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          <br />
          <h1 className='text-center text-black text-xl font-bold py-5'><Link to="/Product">VER TODOS</Link></h1>
        </div>
      </div>
    </>
  );
}



