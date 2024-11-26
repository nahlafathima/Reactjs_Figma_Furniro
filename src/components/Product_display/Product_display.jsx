import React from 'react'
import './Product_display.css'
import star from '../../assets/images/star.png'
import dull_star from '../../assets/images/star_dull.png'


const Product_display = (props) => {
    const {product}=props;
    
  return (
    <div className='product-display-container'>
      <div className='product-display-left'>
        <div className='product-display-left-image'>
            <img src={product.image_url} alt=""/>
            <img src={product.image_url} alt=""/>
            <img src={product.image_url} alt=""/>
            <img src={product.image_url} alt=""/>
        </div>
        <div className='product-display'>
            <img src={product.image_url} alt=""/>
        </div>
      </div>
      <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={dull_star} alt="" />
                <p>(240)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="product-display-right-price-new">
                ₹{product.new_price}
                </div>
            </div>
            <div className="product-display-right-description">
               {product.description}
            </div>
            <div className="product-display-right-size">
                <h1>Select size</h1>
                <div className="product-display-right-sizes">
                    <div>L</div>
                    <div>XL</div>
                    <div>XS</div>
                </div>
            </div>
            <button>ADD TO CART</button>
        </div>
        
    </div>
  )
}

export default Product_display
