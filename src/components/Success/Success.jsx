import React from 'react'
import success from '../../assets/images/success.gif'
import './Success.css'
import {useNavigate} from 'react-router-dom';
import Warranty from '../Warranty/Warranty';


const Success = () => {
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/')
        window.scrollTo({top:0 , behavior: 'smooth'})
    }
  return (
    <div className='success-container'>
        <img src={success} alt="Success" className="success-gif" />
        <h2>Order Successfully Placed</h2>
        <p>Your order has been placed successfully. Thank you for shopping with us!</p>
        <button className="home-link" onClick={()=>handleNavigation('/')}>Go to Home</button>
    </div>
  )
}

export default Success
