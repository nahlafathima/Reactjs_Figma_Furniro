import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/')
        window.scrollTo({top:0 , behavior: 'smooth'})
    }
  return (
    <div className='footer'>
      <div className='container'>
        <div className='main'>
            <h2>Funiro.</h2>
            <address>Thalassery,Kannur <br/>Kerala</address>
        </div>
        <div className='links'>
            <h2>Links</h2>
            <ul>
                <li onClick={()=>handleNavigation('/')}>Home</li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className='help'>
            <h2>Help</h2>
            <ul>
                <li>Payment Option</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
            </ul>
        </div>
        <div className='newsletter'>
            <h2>Newsletter</h2>
            <div className='newsletter-submit'>
                <input type='email' name='email' placeholder='enter your email' ></input>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 Funiro. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
