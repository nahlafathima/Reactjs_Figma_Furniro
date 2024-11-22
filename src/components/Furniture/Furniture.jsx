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
    <div className="category">
      <p>Share your setup with</p>
      <h2>#FuniroFurniture</h2>
      <div className="gallery-grid">
        <div className="gallery-item item1">
          <img src={image1} alt="Furniture piece 1" />
        </div>
        <div className="gallery-item item2">
          <img src={image2} alt="Furniture piece 2" />
        </div>
        <div className="gallery-item item3">
          <img src={image3} alt="Furniture piece 3" />
        </div>
        <div className="gallery-item item4">
          <img src={image4} alt="Furniture piece 4" />
        </div>
        <div className="gallery-item item5">
          <img src={image5} alt="Furniture piece 5" />
        </div>
        <div className="gallery-item item6">
          <img src={image6} alt="Furniture piece 6" />
        </div>
        <div className="gallery-item item7">
          <img src={image7} alt="Furniture piece 7" />
        </div>
        <div className="gallery-item item8">
          <img src={image8} alt="Furniture piece 8" />
        </div>
      </div>
    </div>
  );
};

export default Furniture;
