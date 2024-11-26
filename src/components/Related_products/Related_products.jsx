import React from 'react'
import collections from '../../../src/Products'
import Items from '../Items/Items'
import './Related_products.css'
import { useNavigate } from 'react-router-dom'

const Related_products = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/shop')
        window.scrollTo({top:0 , behavior: 'smooth'})
    }
  return (
    <div className='related-collections'>
      <h1>Related Products</h1>
      <div className='related-new-collections'>
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
      <button className='related-product-button' onClick={()=> handleNavigation('/shop')}>Show More</button>
    </div>
  )
}

export default Related_products
