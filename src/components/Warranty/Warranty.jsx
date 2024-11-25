
import React from 'react'
import trophy from '../../assets/images/trophy.png'
import shipping from '../../assets/images/shipping.png'
import customer from '../../assets/images/customer-support.png'
import guarantee from '../../assets/images/guarantee.png'
import './Warranty.css'

const Warranty = () => {
  return (
    <div className='warranty-container'>
      <div className='trophy'>
        <img src={trophy} alt=""></img>
        <h2>High Quality <br/><span>Crafted from top materials</span></h2>
        
      </div>
      <div className='warranty'>
        <img src={guarantee} alt=""></img>
        <h2>Warranty Protection <br/><span>Over 2 years</span></h2>
        
      </div>
      <div className='shipping'>
        <img src={shipping} alt=""></img>
        <h2>Free Shipping <br/><span>Order over 150 $</span></h2>
        
      </div>
      <div className='customer'>
        <img src={customer} alt=""></img>
        <h2>24/7 Support <br/><span>Dedicated support</span></h2>
        
      </div>
    </div>
  )
}

export default Warranty
