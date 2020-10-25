import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './Confirmation.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';

const Confirmation = () => {
    return (
        <div className="container off-white">
            <header>
                <div className="logo-container-container">
                    <NavLink to={appRoutes.home} className="logo-container">
                        <img type="image/svg+xml" src={paw} className="logo-icon" alt="paw" />
                        <p className="logo-name">Muddy Paws</p>
                    </NavLink>
                </div>
                <div className="page-title">
                    <h1>Confirmation</h1>
                </div>
                <div className="products-link-container">
                    <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                    <div className="cart-quantity-label">0</div>
                </NavLink>
            </header>

            <div className="confirmation-container drop-shadow">
                <div className="confirmation-title">Thank you, your order has been placed.</div>
                <div className="confirmation-info-container">
                    <div className="confirmation-info">
                        <div className="confirmation-label">1 item will be shipped to Victor Grajski</div>
                        <div className="confirmation-address">5000 Forbes Avenue, #123 Pittsburgh, PA 15217</div>
                        <div className="delivery-date">Estimated delivery: Sunday, Sep 27</div>
                    </div>
                    <div className="confirmation-image-container">
                        <img src="assets/photos/dog-harness.jpg" className="confirmation-image drop-shadow" alt="product" />
                    </div>
                </div>
                <div className="signup-container">
                    <div className="signup-title">Sign up for email alerts</div>
                    <div className="signup-input-container">
                        <div className="signup-input-label">Email address</div>
                        <div className="signup-input">
                            <input type="text" className="signup-input-text" id="signup-input-text" name="signup-input-text" />
                        </div>
                    </div>
                    <div className="signup-button">Sign up</div>
                </div>
                <div className="signup-container" id="sms-signup-container">
                    <div className="signup-title">Sign up for SMS alerts</div>
                    <div className="signup-input-container">
                        <div className="signup-input-label">Phone Number</div>
                        <div className="signup-input">
                            <input type="text" className="signup-input-text" id="signup-input-text" name="signup-input-text" />
                        </div>
                    </div>
                    <div className="signup-button">Sign up</div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Confirmation;
