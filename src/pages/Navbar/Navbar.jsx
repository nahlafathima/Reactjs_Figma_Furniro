import React from 'react'
import Logo from '../../assets/images/logo.png'
import cartcount from '../../assets/images/cart-count.png'
import search from '../../assets/images/search.png'
import heart from '../../assets/images/heart.png'
import cart from '../../assets/images/cart.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate('/')
    }
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
            <img src={Logo} alt="Logo" />
            
        </div>
        <ul className='menu'>
            <li onClick={()=>handleNavigation('/')}>Home</li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
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

