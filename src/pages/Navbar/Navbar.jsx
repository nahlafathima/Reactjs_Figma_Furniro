import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import cartcount from '../../assets/images/cart-count.png';
import search from '../../assets/images/search.png';
import heart from '../../assets/images/heart.png';
import cart from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div>
      <div className='navbar'>
        
        <div className='logo'>
          <img src={Logo} alt="Logo" />
        </div>

        
        <div className='icons-mobile' onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </div>

        
        <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li><Link to='/shop' onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to='/about' onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to='/contact' onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        
        <div className='icons'>
          <Link className='cart-count'><img src={cartcount} alt="Cart Count" /></Link>
          <Link className='search'><img src={search} alt="Search" /></Link>
          <Link className='love'><img src={heart} alt="Wishlist" /></Link>
          <Link className='cart'><img src={cart} alt="Cart" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
