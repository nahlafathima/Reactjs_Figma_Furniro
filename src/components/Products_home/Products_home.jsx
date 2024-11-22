import React from 'react'
import collections from '../../../src/Products'
import Items from '../Items/Items'
import './Products_home.css'
import { useNavigate } from 'react-router-dom'


const Products_home = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/')
        window.scrollTo({top:0 , behavior: 'smooth'})
    }

  return (
    <div className='collections'>
      <h1>Our Products</h1>
      <div className='new-collections'>
        {collections.map((item,i)=>{
            return(
                <Items
                key={i}
                id={item.id}
                image_url={item.image_url}
                name={item.name}
                description={item.description}
                old_price={item.old_price}
                new_price={item.new_price}
                />
            );
        })}
      </div>
      <button className='product-button' onClick={()=> handleNavigation('/')}>Show More</button>
    </div>
  )
}

export default Products_home
