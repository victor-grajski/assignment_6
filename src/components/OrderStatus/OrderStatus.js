import React, { useContext } from "react";
import Context from '../../Context';
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './OrderStatus.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';
import checkFull from '../../assets/icons/check-full.svg';
import checkEmpty from '../../assets/icons/check-empty.svg';

import dogHarness from '../../assets/photos/dog-harness.jpg';

const OrderStatus = () => {
    const context = useContext(Context);
    const { product } = context.cartItems[0];
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
                    <h1>Order Status</h1>
                </div>
                <div className="products-link-container">
                    <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                    <div className="cart-quantity-label">0</div>
                </NavLink>
            </header>

            <div className="order-status-container-container drop-shadow">
                <div className="order-status-container">
                    <div className="order-status-item">
                        <div className="order-status-label">Order Placed</div>
                        <img src={checkFull} className="order-status-icon" alt="check full" />
                        <div className="order-status-time">Wed Sep 23</div>
                    </div>
                    <div className="order-status-item">
                        <div className="order-status-label">Shipped</div>
                        <img src={checkEmpty} className="order-status-icon" alt="check empty" />
                        <div className="order-status-time">Fri Sep 25</div>
                    </div>
                    <div className="order-status-item">
                        <div className="order-status-label">Delivered</div>
                        <img src={checkEmpty} className="order-status-icon" alt="check empty" />
                        <div className="order-status-time">Sun Sep 27</div>
                    </div>
                </div>
                <div className="order-info-container">
                    <div className="order-shipping-address-container">
                        <div className="order-shipping-address-title">Shipping Address</div>
                        <div className="order-shipping-address-name">Victor Grajski</div>
                        <div className="order-shipping-address-line1">5000 Forbes Avenue #123</div>
                        <div className="order-shipping-address-line2">Pittsburgh, PA 15217</div>
                    </div>
                    <div className="order-total-container">
                        <div className="order-total-left">
                            <div className="order-status-total">Order Total</div>
                            <div className="order-status-subtotal">Subtotal</div>
                            <div className="order-status-shipping">Shipping</div>
                            <div className="order-status-tax">Tax</div>
                        </div>
                        <div className="order-total-right">
                            <div className="order-status-total-amount">$35.42</div>
                            <div className="order-status-subtotal-amount">$24.99</div>
                            <div className="order-status-shipping-amount">$8.99</div>
                            <div className="order-status-tax-amount">$1.44</div>
                        </div>
                    </div>
                </div>
                <div className="order-items-container">
                    <div className="order-items-title">Items</div>
                    <div className="order-status-items-container">
                        <div className="order-status-item-container">
                            <div className="order-status-item-main">
                                <img src={dogHarness} className="order-status-item-image" alt="product" />
                                <div className="order-status-item-info">
                                    <div className="order-status-item-title">Dog Harness</div>
                                    <div className="order-status-item-size">Size: Large</div>
                                    <div className="order-status-item-color">Color: Blackberry</div>
                                    <div className="order-status-item-quantity">Quantity: 1</div>
                                </div>
                                <div className="order-status-item-price">$24.99</div>
                            </div>
                            <div className="order-status-item-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default OrderStatus;
