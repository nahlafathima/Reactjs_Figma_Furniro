import React from 'react'
import Hero from '../components/Hero/Hero'
import Browse from '../components/Browse/Browse'
import Products_home from '../components/Products_home/Products_home'
import Inspiration from '../components/Inspiration/Inspiration'
import Furniture from '../components/Furniture/Furniture'



const Home = () => {
  return (
    <div>
        <Hero />
        <Browse />
        <Products_home />
        <Inspiration />
        <Furniture />
    </div>
  )
}

export default Home
