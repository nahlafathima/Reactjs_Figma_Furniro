import React from 'react'
import background from '../../assets/images/background.png'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='background-image'>
            <img src={background} alt=''/>
        </div>
        <div className='hero-box'>
        <h2>New Arrival</h2>
        <h1>Discover Our<br /> New Collection</h1>
        <p>Discover timeless elegance in every piece, thoughtfully designed to complement your unique style and bring effortless sophistication to your wardrobe.</p>
        <button className='hero-button'>BUY NOW</button>
        </div>
    </div>
    </div>
  )
}

export default Hero
