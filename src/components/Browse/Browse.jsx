import React from 'react'
import dining from '../../assets/images/dining.png'
import living from '../../assets/images/living.png'
import bedroom from '../../assets/images/bedroom.png'
import './Browse.css'


const Browse = () => {
  return (
    
      <div className='browse'>
        <h1>Browse The Range</h1>
        <p>Discover a wide range of unique products tailored to suit your every need.</p>
      
      <div className='browse-category'>
        <div className='list-category'>
            <img src={dining} alt=''/>  
            <h2>Dining</h2>
        </div>
        <div className='list-category'>
            <img src={living} alt=''/>  
            <h2>Living</h2>
        </div>
        <div className='list-category'>
            <img src={bedroom} alt=''/>  
            <h2>Bedroom</h2>
        </div>
      </div>
    </div>
  )
}

export default Browse
