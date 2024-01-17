import React from 'react'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import { Carousel } from "@material-tailwind/react";
 
  export function Carousel() {
    return (
      <Carousel className="rounded-xl">
        <img
          src={img1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={img2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={img3}
          className="h-full w-full object-cover"
        />
      </Carousel>
    );
  }

