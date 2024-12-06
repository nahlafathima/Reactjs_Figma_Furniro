import React from 'react'
import './Banner_singlepage.css'
import arrow from '../../assets/images/arrow.png'
import { Link } from 'react-router-dom'


const Banner_singlepage = (props) => {
    const { product } = props;
    return (
        <div className='page-container'>
            <div className='page-row'>
                <Link to="/">Home</Link> <img src={arrow} alt='' /> <Link to="/Shop">Shop</Link><img src={arrow} alt='' />{product.name}
            </div>
        </div>
    )
}

export default Banner_singlepage
