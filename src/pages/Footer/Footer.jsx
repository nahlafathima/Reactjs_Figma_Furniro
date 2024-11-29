import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className='footer'>
            <div className='container'>
                <div className='main'>
                    <h2>Funiro.</h2>
                    <address>Thalassery,Kannur <br />Kerala</address>
                </div>
                <div className='links'>
                    <h2>Links</h2>
                    <ul>
                        <li onClick={() => handleNavigation('/')}>Home</li>
                        <li onClick={() => handleNavigation('/Shop')}>Shop</li>
                        <li onClick={() => handleNavigation('/About')}>About</li>
                        <li onClick={() => handleNavigation('/Contact')}>Contact</li>

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
