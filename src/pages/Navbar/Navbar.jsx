import React, { useState, useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.png';
import heart from '../../assets/images/heart.png';
import cart1 from '../../assets/images/cart.png';
import cartcount from '../../assets/images/cart-count.png'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Shopcontext } from '../../Context/Shopcontext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { cart } = useContext(Shopcontext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);



  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" onClick={() => handleNavigation('/')} />
        </div>

       

        <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <li onClick={() => handleNavigation('/')}>Home</li>
          <li onClick={() => handleNavigation('/Shop')}>Shop</li>
          <li onClick={() => handleNavigation('/About')}>About</li>
          <li onClick={() => handleNavigation('/Contact')}>Contact</li>
        </ul>

        <div className="icons">
          <Link className="cart-count"><img src={cartcount} alt="cart count" /></Link>
          <Link className="search"><img src={search} alt="Search Icon" /></Link>
          <Link className="love"><img src={heart} alt="Wishlist Icon" /></Link>
          <Link to="/Cart" className="cart"><img src={cart1} alt="Cart Icon"  /></Link>
          <span className="cart-total">{cartCount}</span>
        </div>

        <div className="icons-mobile" onClick={toggleMenu}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
