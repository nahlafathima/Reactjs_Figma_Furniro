import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.png';
import heart from '../../assets/images/heart.png';
import cart1 from '../../assets/images/cart.png';
import './Navbar.css';
import { Shopcontext } from '../../Context/Shopcontext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { allcollections, cart } = useContext(Shopcontext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = allcollections.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchFocus = () => setIsSearching(true);

  const handleSearchBlur = () => {
    if (!searchQuery) setIsSearching(false);
  };

  const handleProductSelect = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery('');
    setIsSearching(false); 
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" onClick={() => navigate('/')} />
        </div>

        <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/Shop')}>Shop</li>
          <li onClick={() => navigate('/About')}>About</li>
          <li onClick={() => navigate('/Contact')}>Contact</li>
        </ul>

        <div className="icons">
          <div className={`search-container ${isSearching ? 'active' : ''}`}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="search-input"
            />
            <img
              src={search}
              alt="Search Icon"
              className="search-icon"
              onClick={handleSearchFocus}
            />
          </div>
          <Link className="love">
            <img src={heart} alt="Wishlist Icon" />
          </Link>
          <Link to="/Cart" className="cart">
            <img src={cart1} alt="Cart Icon" />
          </Link>
          <span className="cart-total">{cartCount}</span>
        </div>

        <div className="icons-mobile" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </div>
      </div>

       {/* Search results  */}
      {isSearching && searchQuery && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-item"
                onClick={() => handleProductSelect(product.id)}
              >
                <img src={product.image_url} alt={product.name} className="search-item-img" />
                <span>{product.name}</span>
              </div>
            ))
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
