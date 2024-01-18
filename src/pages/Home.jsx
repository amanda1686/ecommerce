import React from 'react'
import Sliderproducts from '../componentes/slider'
import Servicescard from '../componentes/Servicescard'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <div className="" style={{ backgroundColor: '#f2f3f4' }}>
            <Sliderproducts />
        </div>
        <div className="">
            <Servicescard />
        </div>
    </div>
  )
}
