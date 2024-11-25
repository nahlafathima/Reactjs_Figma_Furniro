import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'
import logo1 from '../../assets/images/furniro_logo.png'

const Banner1 = () => {
  return (
    <div className='banner-container'>
      <div className='banner-img'>
        <img src={banner} alt='banner'></img>
      </div>
      <div className='content'>
        <img src={logo1} alt=''></img>
        <h1>Contact</h1>
        <p><span>Home</span>  &gt; <span>Contact</span></p>
      </div>
    </div>
  )
}

export default Banner1