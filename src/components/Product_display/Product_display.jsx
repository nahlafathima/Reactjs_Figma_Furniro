import React, { useContext, useState } from "react";
import "./Product_display.css";
import star from "../../assets/images/star.png";
import dull_star from "../../assets/images/star_dull.png";
import { Shopcontext } from "../../Context/Shopcontext";
import { useNavigate } from 'react-router-dom';

const Product_display = (props) => {
    const { product } = props;
    const { addToCart, cart, clearCart, calculateTotal, removeFromCart } = useContext(Shopcontext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const navigate = useNavigate();

    // Handle adding item to cart
    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart({ ...product, selectedSize });
            setIsCartVisible(true); // Show the cart notification
        } else {
            alert("Please select a size before adding to cart!");
        }
    };

    // Handle size selection
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
    return (
        <div className="product-display-container">
            <div className="product-display-left">
                <div className="product-display-left-image">
                    <img src={product.image_url} alt={product.name} />
                    <img src={product.image_url} alt={product.name} />
                    <img src={product.image_url} alt={product.name} />
                    <img src={product.image_url} alt={product.name} />
                </div>
                <div className="product-display">
                    <img src={product.image_url} alt={product.name} />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={dull_star} alt="dull star" />
                    <p>(240)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="product-display-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="product-display-right-description">{product.description}</div>
                <div className="product-display-right-size">
                    <h1>Select size</h1>
                    <div className="product-display-right-sizes">
                        {["L", "XL", "XS"].map((size) => (
                            <div
                                key={size}
                                className={`size-button ${selectedSize === size ? "active" : ""}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
            </div>

            {/* Cart Notification Section */}
            <div className="cart-container">
                
                {isCartVisible && (
                    <div className="cart-dropdown">
                        <h2>Shopping Cart</h2>
                        <hr/>
                        {cart.length > 0 ? (
                            <>
                                <ul>
                                    {cart.map((item, index) => (
                                        <li key={index} className="cart-item">
                                            <img src={item.image_url} alt={item.name} />
                                            <div className="cart-item-details">
                                                <p>{item.name}</p>
                                                <p>Size: {item.selectedSize}</p>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Price: ₹{item.new_price}</p>
                                            </div>
                                            <button className="button-deselect" onClick={() => removeFromCart(item.id)}>X</button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cart-footer">
                                    <p>Total: <span>₹{calculateTotal()}</span></p>
                                    <hr/>
                                    <button className="cart-button" onClick={() => handleNavigation('/Cart')}>Cart</button>
                                    <button className="checkout-button" onClick={() => handleNavigation('/Checkout')}>Checkout</button>
                                    <button className="clear-button" onClick={clearCart}>Clear Cart</button>
                                    
                                </div>
                            </>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product_display;
