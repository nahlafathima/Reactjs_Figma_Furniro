
import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return (
        <div className='banner-container'>
            <div className='banner-img'>
                <img src={banner} alt='banner'></img>
            </div>
            <div className='content'>
                <h1 onClick={() => handleNavigation('/Shop')}>Shop</h1>
                <p><span onClick={() => handleNavigation('/')}>Home</span>  &gt; <span>Shop</span></p>
            </div>
        </div>
    )
}

export default Banner
