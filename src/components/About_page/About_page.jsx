import React from 'react'
import pic from '../../assets/images/all_in_one.png'
import './About_page.css'

const About_page = () => {
    return (
        <div className='about-container'>
            <div className='about-heading'>
                <h1>About Us</h1>
            </div>
            <div className='about-para'>
                <p>Welcome to Furniro, where we bring together style, comfort, and craftsmanship to transform your living spaces into something truly special. Our mission is to create high-quality furniture that combines elegance, durability, and functionality, catering to diverse tastes and budgets. With a passion for design and innovation, we offer a wide range of beautifully crafted pieces that elevate your home and reflect your unique style.</p>
                <p>At Furniro, we take pride in our commitment to quality and customer satisfaction. From modern and contemporary designs to timeless classics, our collections are designed to suit every preference. Whether you’re furnishing a new home or redesigning a room, our expertly crafted furniture promises to make your space inviting, comfortable, and inspiring for years to come.</p>
            </div>
            <div className='about-img'>
                <img src={pic} alt='' />
            </div>

        </div>
    )
}

export default About_page
