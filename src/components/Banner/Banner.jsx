import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner-img'>
        <img src={banner} alt='banner'></img>
      </div>
      <div className='content'>
        <h1>Shop</h1>
        <p><span>Home</span>  &gt; <span>Shop</span></p>
      </div>
    </div>
  )
}

export default Banner
