import React, { useState } from 'react';
import './inspiration.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image7 from '../../assets/images/7.png';
import image8 from '../../assets/images/8.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Inspiration = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div className='inspiration'>
            <div className='inspiration-text'>
                <h1>50+ Beautiful Rooms Inspiration</h1>
                <p>Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you.</p>
                <button className='inspiration-button' onClick={handleNavigation}>Explore More</button>
            </div>

<div className="slider-container">
      <Slider {...settings}>
        <div className='card'>
            <img src={image1} alt=''/>
        </div>
        <div className='card'>
        <img src={image2} alt=''/>
        </div>
        <div className='card'>
        <img src={image3} alt=''/>
        </div>
        <div className='card'>
        <img src={image4} alt=''/>
        </div>
        <div className='card'>
        <img src={image5} alt=''/>
        </div>
        <div className='card'>
        <img src={image6} alt=''/>
        </div>
        <div className='card'>
        <img src={image7} alt=''/>
        </div>
        <div className='card'>
        <img src={image8} alt=''/>
        </div>
       
      </Slider>
    </div>
        </div>
    );
};

export default Inspiration;
