import React from 'react'
import './Banner_singlepage.css'
import arrow from '../../assets/images/arrow.png'


const Banner_singlepage = (props) => {
        const {product}=props;
  return (
    <div className='page-container'>
      <div className='page-row'>
        Home <img src={arrow} alt=''/> Shop<img src={arrow} alt=''/>{product.name}
      </div>
    </div>
  )
}

export default Banner_singlepage
