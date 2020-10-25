import React, { useContext } from "react";
import Context from '../../Context';
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './Confirmation.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';

const Confirmation = () => {
    const context = useContext(Context);
    let numItems = 0;

    if (context.cartItems) {
        for (let item of context.cartItems) {
            numItems += parseInt(item.quantity);
        }
    }

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
                        <div className="confirmation-label">{numItems} items will be shipped to Victor Grajski</div>
                        <div className="confirmation-address">5000 Forbes Avenue, #123 Pittsburgh, PA 15217</div>
                        <div className="delivery-date">Estimated delivery: Sunday, Sep 27</div>
                    </div>

                    {context.cartItems.map((item) => (
                        <div className="confirmation-image-container" key={context.cartItems.indexOf(item)}>
                            <img src={item.product.image} className="confirmation-image drop-shadow" alt="product" />
                        </div>
                    ))}
                    
                </div>
                <div className="signup-container">
                    <div className="signup-title">Sign up for email alerts</div>
                    <div className="signup-input-container">
                        <div className="signup-input-label">Email address</div>
                        <div className="signup-input">
                            <input type="text" className="signup-input-text" id="email-signup-input-text" name="signup-input-text" />
                        </div>
                    </div>
                    <div className="signup-button">Sign up</div>
                </div>
                <div className="signup-container" id="sms-signup-container">
                    <div className="signup-title">Sign up for SMS alerts</div>
                    <div className="signup-input-container">
                        <div className="signup-input-label">Phone Number</div>
                        <div className="signup-input">
                            <input type="text" className="signup-input-text" id="sms-signup-input-text" name="signup-input-text" />
                        </div>
                    </div>
                    <div className="signup-button">Sign up</div>
                </div>
                <NavLink to={appRoutes.orderStatus} className="check-order-status drop-shadow">Check Order Status</NavLink>
            </div>
        </div>
    );
  };
  
  export default Confirmation;
