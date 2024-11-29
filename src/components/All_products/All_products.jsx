import React from 'react'
import allcollections from '../../../src/Product_all_shop'
import './All_products.css'
import { useNavigate } from 'react-router-dom'
import Items from '../Items/Items'


const All_products = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/shop')
        window.scrollTo({top:0 , behavior: 'smooth'})
    }

  return (
    <div className='all-collections'>
      <div className='all-new-collections'>
        {allcollections.map((item,i)=>{
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
      <button className='all-product-button' onClick={()=> handleNavigation('/')}>Show More</button>
    </div>
  )
}

export default All_products