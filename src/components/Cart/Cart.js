import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './Cart.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';

const Cart = () => {
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
                    <h1>Your Cart</h1>
                </div>
                <div className="products-link-container">
                    <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                </NavLink>
            </header>

            <div className="cart-image-container">
                <img src="assets/photos/dog-harness.jpg" className="cart-image drop-shadow" alt="product" />
            </div>
            <div className="cart-main-info-container">
                <div className="cart-item-title">Dog Harness</div>
                <div className="cart-item-size">Size: Large</div>
                <div className="cart-item-color">Color: Blackberry</div>
                <div className="cart-item-quantity-container">
                    <div className="cart-item-quantity-label">Quantity</div>
                    <div className="cart-item-quantity-dropdown-container">
                        <select name="cart-quantity-options" className="cart-quantity-dropdown dropdown" id="cart-quantity-options">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="cart-side-info-container">
                <div className="cart-item-price">$24.99</div>
                <div className="cart-item-delete">Delete</div>
            </div>
            <div className="cart-hr"></div>
            <div className="cart-cta-container">
                <div className="subtotal-container">
                    <div className="subtotal-label">Subtotal:</div>
                    <div className="subtotal-num">$24.99</div>
                </div>
                <div className="proceed-to-checkout-container">
                    <NavLink to={appRoutes.checkout} className="proceed-to-checkout drop-shadow">Proceed to Checkout</NavLink>
                </div>
            </div>
        </div>
    );
  };
  
  export default Cart;
