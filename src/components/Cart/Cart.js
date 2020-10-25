import React, { useContext } from "react";
import Context from '../../Context';
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './Cart.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';

const Cart = () => {
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
                    <h1>Your Cart</h1>
                </div>
                <div className="products-link-container">
                    <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                    <div className="cart-quantity-label">{numItems}</div>
                </NavLink>
            </header>

            <div className="cart-items-container">

                {context.cartItems.map((item) => (
                    <div className="cart-item-container" key={context.cartItems.indexOf(item)}>
                        <div className="cart-item">
                            <div className="cart-image-container">
                                <img src={item.product.image} className="cart-image drop-shadow" alt="product" />
                            </div>
                            <div className="cart-main-info-container">
                                <div className="cart-item-title">{item.product.name}</div>
                                <div className="cart-item-size">Size: {item.size}</div>
                                <div className="cart-item-color">Color: {item.color}</div>
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
                                <div className="cart-item-price">{item.product.price}</div>
                                <div className="cart-item-delete">Delete</div>
                            </div>
                        </div>
                        <div className="cart-hr"></div>
                    </div>
                ))}

            </div>

            

            

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
