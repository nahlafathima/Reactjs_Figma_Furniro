
import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'
import logo1 from '../../assets/images/furniro_logo.png'

const Banner2 = () => {
  return (
    <div className='banner-container'>
      <div className='banner-img'>
        <img src={banner} alt='banner'></img>
      </div>
      <div className='content'>
      <img src={logo1} alt=''></img>
        <h1>About</h1>
        <p><span>Home</span>  &gt; <span>About</span></p>
      </div>
    </div>
  )
}

export default Banner2