import React from 'react'
import Logo from '../../assets/images/logo.png'
import cartcount from '../../assets/images/cart-count.png'
import search from '../../assets/images/search.png'
import heart from '../../assets/images/heart.png'
import cart from '../../assets/images/cart.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
            <img src={Logo} alt="Logo" />
            
        </div>
        <ul className='menu'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='icons'>
            <Link className='cart-count'><img src={cartcount} alt="Logo" /></Link>
            <Link className='search'><img src={search} alt="Logo" /></Link>
            <Link className='love'><img src={heart} alt="Logo" /></Link>
            <Link className='cart'><img src={cart} alt="Logo" /></Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar

