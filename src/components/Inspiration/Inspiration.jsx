import React from 'react'
import './inspiration.css'
import products from '../../assets/images/Products.png'
import { useNavigate } from 'react-router-dom'


const Inspiration = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/')
        window.scrollTo({top:0 , behavior: 'smooth'})
    }
  return (
    <div className='inspiration'>
      <div className='inspiration-text'>
      <h1>50+ Beautiful rooms inspiration</h1>
      <p>Our designer already made a lot of beautiful <br></br>prototype of rooms that inspire you.</p>
      
      <button className='inspiration-button' onClick={()=>handleNavigation('/')}>Explore More</button>
      </div>
      <div className='img-container'>
        <img src={products} alt=""/>
      </div> 
    </div>
  )
}

export default Inspiration
