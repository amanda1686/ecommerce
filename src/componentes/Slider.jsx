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
        breakpoint: 800,
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
        const response = await fetch('http://localhost:3001/products');
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



