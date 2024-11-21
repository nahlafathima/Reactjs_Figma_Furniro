import React from 'react';
import './Furniture.css';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.png';
import image5 from '../../assets/images/5.png';
import image6 from '../../assets/images/6.png';
import image7 from '../../assets/images/7.png';
import image8 from '../../assets/images/8.png';

const Furniture = () => {
  return (
    <div className='category'>
      <p>Share your setup with</p>
      <h2>#FurniroFurniture</h2>
      <div className='image-category'>
        <img className='image1' src={image1} alt="Image 1" />
        <img className='image2' src={image2} alt="Image 2" />
        <img className='image3' src={image3} alt="Image 3" />
        <img className='image4' src={image4} alt="Image 4" />
        <img className='image5' src={image5} alt="Image 5" />
        <img className='image6' src={image6} alt="Image 6" />
        <img className='image7' src={image7} alt="Image 7" />
        <img className='image8' src={image8} alt="Image 8" />
      </div>
    </div>
  );
};

export default Furniture;
