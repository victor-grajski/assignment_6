import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './Checkout.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';

const Checkout = () => {
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
                    <h1>Checkout</h1>
                </div>
                <div className="products-link-container">
                    <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                </NavLink>
            </header>

            <div className="shipping-address-container drop-shadow">
                <div className="shipping-address">Shipping Address</div>
                <div className="full-name-container">
                    <div className="full-name-label">Full Name</div>
                    <div className="full-name-input-container">
                        <input type="text" className="full-name-input-text" id="full-name-input-text" name="full-name-input-text" />
                    </div>
                </div>
                <div className="address-line1-container">
                    <div className="address-line1-label">Address line 1</div>
                    <div className="address-line1-input-container">
                        <input type="text" className="address-line1-input-text" id="address-line1-input-text" name="address-line1-input-text" />
                    </div>
                </div>
                <div className="address-line2-container">
                    <div className="address-line2-label">Address line 2</div>
                    <div className="address-line2-input-container">
                        <input type="text" className="address-line2-input-text" id="address-line2-input-text" name="address-line2-input-text" />
                    </div>
                </div>
                <div className="city-container">
                    <div className="city-label">City</div>
                    <div className="city-input-container">
                        <input type="text" className="city-input-text" id="city-input-text" name="city-input-text" />
                    </div>
                </div>
                <div className="state-container">
                    <div className="state-label">State</div>
                    <div className="state-input-container">
                        <input type="text" className="state-input-text" id="state-input-text" name="state-input-text" />
                    </div>
                </div>
                <div className="zip-container">
                    <div className="zip-label">ZIP Code</div>
                    <div className="zip-input-container">
                        <input type="text" className="zip-input-text" id="zip-input-text" name="zip-input-text" />
                    </div>
                </div>
                <div className="continue-to-payment-container">
                    <div className="continue-to-payment">Continue to Payment</div>
                </div>
            </div>
            <div className="payment-info-container drop-shadow">
                <div className="shipping-address">Payment Info</div>
                <div className="card-number-container">
                    <div className="card-number-label">Card Number</div>
                    <div className="card-number-input-container">
                        <input type="text" className="card-number-input-text" id="card-number-input-text" name="card-number-input-text" />
                    </div>
                </div>
                <div className="name-on-card-container">
                    <div className="name-on-card-label">Name on card</div>
                    <div className="name-on-card-input-container">
                        <input type="text" className="name-on-card-input-text" id="name-on-card-input-text" name="name-on-card-input-text" />
                    </div>
                </div>
                <div className="expiration-date-container">
                    <div className="expiration-date-label">Expiration date</div>
                    <div className="expiration-date-input-container">
                        <input type="text" className="expiration-date-input-text" id="expiration-date-input-text" name="expiration-date-input-text" />
                    </div>
                </div>
                <div className="billing-check-container">
                    <div className="billing-check-label">Billing address same as shipping?</div>
                    <div className="billing-check-input-container">
                        <input type="checkbox" className="billing-check-input" id="billing-check-input" name="billing-check-input" />
                    </div>
                </div>
                <div className="continue-to-payment-container">
                    <div className="continue-to-payment">Review items and shipping</div>
                </div>
            </div>
            <div className="review-items-container drop-shadow">
                <div className="shipping-address">Review items and shipping</div>
                <div className="checkout-items-container">
                    <div className="checkout-items-label">Items</div>
                    <div className="checkout-item-image-container">
                        <img src="assets/photos/dog-harness.jpg" className="checkout-item-image drop-shadow" alt="product" />
                    </div>
                    <div className="checkout-item-info-container">
                        <div className="checkout-item-name">Dog Harness</div>
                        <div className="checkout-item-size">Size: Large</div>
                        <div className="checkout-item-color">Color: Blackberry</div>
                    </div>
                    <div className="checkout-item-price">$24.99</div>
                </div>
                <div className="checkout-review-shipping-address-container">
                    <div className="checkout-review-shipping-address-label">Shipping Address</div>
                    <div className="checkout-review-shipping-address">5000 Forbes Avenue, #123 Pittsburgh, PA 15217</div>
                    <div className="checkout-review-shipping-address-change">Change</div>
                </div>
                <div className="checkout-review-payment-container">
                    <div className="checkout-review-payment-label">Payment</div>
                    <div className="checkout-review-payment">card ending in 1234</div>
                    <div className="checkout-review-payment-change">Change</div>
                </div>
                <div className="checkout-review-shipping-option-container">
                    <div className="checkout-review-shipping-option-label">Shipping option</div>
                    <div className="standard-shipping">Standard - $8.99</div>
                    <div className="expedited-shipping">Expedited - $14.99</div>
                </div>
                <div className="checkout-review-tax-container">
                    <div className="checkout-review-taxes-label">Taxes</div>
                    <div className="checkout-review-taxes-secondary-label">PA Sales Tax</div>
                    <div className="checkout-review-tax">$1.44</div>
                </div>
                <div className="checkout-review-order-total-container">
                    <div className="checkout-review-order-total-label">Order total:</div>
                    <div className="checkout-review-order-total-secondary-label">$35.42</div>
                    <NavLink to={appRoutes.confirmation} className="place-your-order drop-shadow">Place your order</NavLink>
                </div>
            </div>
        </div>
    );
  };
  
  export default Checkout;
