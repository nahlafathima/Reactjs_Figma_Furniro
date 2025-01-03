import React, { useContext, useState } from 'react';
import './Checkout.css';
import { Shopcontext } from '../../Context/Shopcontext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, calculateTotal, clearCart } = useContext(Shopcontext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        phone: '',
        country: 'India',
    });

    const [errors, setErrors] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.id);
        setErrors({ ...errors, paymentMethod: '' }); // Clear payment method error on change
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid email is required.';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required.';
        if (!formData.city.trim()) newErrors.city = 'City is required.';
        if (!formData.zip.trim()) newErrors.zip = 'ZIP Code is required.';
        if (!formData.phone.trim() || !/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Valid phone number is required.';
        }
        if (!paymentMethod) newErrors.paymentMethod = 'Please select a payment method.';
        if (cart.length === 0) newErrors.cart = 'Your cart is empty.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        clearCart();
        
        
        // Clear form after placing the order
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            zip: '',
            phone: '',
            country: 'Sri Lanka',
        });
        setPaymentMethod('');
        navigate('/Success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="billing-container">
            <div className="billing-details">
                <h2>Billing Details</h2>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="form-field">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className="form-field">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="form-field">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <p className="error">{errors.address}</p>}
                    </div>
                    <div className="form-field">
                        <label>City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <p className="error">{errors.city}</p>}
                    </div>
                    <div className="form-field">
                        <label>ZIP Code</label>
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                        {errors.zip && <p className="error">{errors.zip}</p>}
                    </div>
                    <div className="form-field">
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="form-field">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-field">
                        <label>Country / Region</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                    {errors.cart && <p className="error">{errors.cart}</p>}
                </form>
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                {cart.map((item) => (
                    <div className="summary-item" key={item.id}>
                        <span>
                            {item.name} × {item.quantity}
                        </span>
                        <span>₹{item.new_price * item.quantity}</span>
                    </div>
                ))}
                <div className="summary-total">
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                </div>
                <hr />
                <div className="payment-options">
                    <h3>Payment Method</h3>
                    <div>
                        <input
                            type="radio"
                            name="payment"
                            id="bank-transfer"
                            onChange={handlePaymentChange}
                        />
                        <label htmlFor="bank-transfer">Direct Bank Transfer</label>
                        <p className="privacy-policy">
                            Make your payment directly into our bank account. Please use your
                            Order ID as the payment reference. Your order will not be shipped
                            until the funds have cleared in our account.
                        </p>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="payment"
                            id="cash-on-delivery"
                            onChange={handlePaymentChange}
                        />
                        <label htmlFor="cash-on-delivery">Cash On Delivery</label>
                        <p className="privacy-policy">
                            Pay with cash on delivery on your order.
                        </p>
                    </div>
                    {errors.paymentMethod && (
                        <p className="error">{errors.paymentMethod}</p>
                    )}
                </div>
                <button
                    className="place-order"
                    onClick={handleSubmit}
                    disabled={cart.length === 0}
                >
                    Place Order
                </button>
                <p className="privacy-policy">
                    Your personal data will be used to support your experience throughout
                    this website, to manage access to your account, and for other purposes
                    described in our privacy policy.
                </p>
            </div>
        </div>
    );
};

export default Checkout;
