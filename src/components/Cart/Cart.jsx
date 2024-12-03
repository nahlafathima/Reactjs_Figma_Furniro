import React, { useContext } from 'react';
import './Cart.css';
import { Shopcontext } from '../../Context/Shopcontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useContext(Shopcontext);
    const navigate = useNavigate();
    const calculateSubtotal = (new_price, quantity) => new_price * quantity;
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
    };

    const handleNavigation = () => {
        navigate('/Checkout')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className="cart1-container">
            <div className="cart1-details">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <tr key={item.id}>
                                    <td><img src={item.image_url} alt={item.name} style={{ width: '50px', height: '50px' }} /><div style={{ display: 'flex', alignItems: 'center' }}>{item.name}</div></td>
                                    <td>₹{item.new_price}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{calculateSubtotal(item.new_price, item.quantity)}</td>
                                    <td>
                                        <button className="remove-btn1" onClick={() => removeFromCart(item.id)}> x </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center' }}> Your cart is empty! </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="cart1-totals">
                <h2>Cart Totals</h2>
                <div className="totals-item">
                    <span>Subtotal</span>
                    <span>₹{calculateTotal()}</span>
                </div>
                <div className="totals-item">
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                </div>
                <button className="checkout-btn" disabled={cart.length === 0} onClick={() => handleNavigation('/')}>Check Out</button>
            </div>
        </div>
    );
};

export default Cart;


