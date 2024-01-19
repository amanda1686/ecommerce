import React from 'react'
import Sliderproducts from '../componentes/slider'
import Carousel from '../componentes/Carousel';
import Servicescard from '../componentes/Servicescard'
import Footer from '../componentes/Footer';
import Img from '../../public/img/slider1.jpg'
import Img2 from '../../public/img/slider2.jpg'
import Img3 from '../../public/img/slider3.jpg'
import Img4 from '../../public/img/slider4.jpg'

const slides =[ Img, Img2, Img3, Img4 ]


export default function Home() {
  return (
    <div>
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
        <div className="" style={{ backgroundColor: '#f2f3f4' }}>
            <Sliderproducts />
        </div>
        <div className="">
            <Servicescard />
        </div>
        <Footer/>
    </div>
  )
}
