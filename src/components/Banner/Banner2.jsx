
import React from 'react'
import './Banner.css'
import banner from '../../assets/images/banner.png'
import logo1 from '../../assets/images/furniro_logo.png'
import { useNavigate } from 'react-router-dom';

const Banner2 = () => {
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
                <img src={logo1} alt=''></img>
                <h1>About</h1>
                <p><span onClick={() => handleNavigation('/')}>Home</span>  &gt; <span>About</span></p>
            </div>
        </div>
    )
}

export default Banner2