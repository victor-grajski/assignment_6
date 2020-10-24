import React from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './AddedToCart.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';
import dogHarnessWaterStorage from '../../assets/photos/dog-harness-water-storage.jpg';
import dogHarnessFoodStorage from '../../assets/photos/dog-harness-food-storage.jpg';
import dogGPSCollar from '../../assets/photos/dog-gps-collar.jpg';

const AddedToCart = () => {
    return (
        <div className="container off-white">
            <header>
                <div className="logo-container-container">
                    <NavLink to={appRoutes.home} className="logo-container">
                        <img type="image/svg+xml" src={paw} className="logo-icon" alt="paw" />
                        <p className="logo-name">Muddy Paws</p>
                    </NavLink>
                </div>
                <div className="products-link-container">
                    <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                </NavLink>
            </header>

            <div className="added-to-cart-image-container">
                <img src="assets/photos/dog-harness.jpg" className="added-to-cart-image drop-shadow" alt="product" />
            </div>
            <div className="added-to-cart-info-container">
                <div className="added-to-cart-label">Added to Cart</div>
                <div className="added-to-cart-product-name">Dog Collar</div>
                <div className="added-to-cart-size">Size: Large</div>
                <div className="added-to-cart-color">Color: Blackberry</div>
            </div>
            <div className="added-to-cart-cta-container">
                <NavLink to={appRoutes.cart} className="added-to-cart-view-cart-button drop-shadow">View Cart</NavLink>
                <div className="added-to-cart-checkout-button drop-shadow">Checkout</div>
                <div className="added-to-cart-checkout-button drop-shadow">Undo</div>
            </div>
            <div className="related-products-title">Related Products</div>
            <div className="related-products-grid">
                <div className="related-products-grid-item">
                    <div className="related-product-image-container">
                        <img src={dogHarnessWaterStorage} className="added-to-cart-image drop-shadow" alt="related product" />
                    </div>
                    <div className="related-product-title">Dog Harness Water Storage</div>
                    <div className="related-product-price">$19.99</div>
                </div>
                <div className="related-products-grid-item">
                    <div className="related-product-image-container">
                        <img src={dogHarnessFoodStorage} className="added-to-cart-image drop-shadow" alt="related product" />
                    </div>
                    <div className="related-product-title">Dog Harness Food Storage</div>
                    <div className="related-product-price">$19.99</div>
                </div>
                <div className="related-products-grid-item">
                    <div className="related-product-image-container">
                        <img src={dogGPSCollar} className="added-to-cart-image drop-shadow" alt="related product" />
                    </div>
                    <div className="related-product-title">Dog GPS Collar</div>
                    <div className="related-product-price">$49.99</div>
                </div>
            </div>
        </div>
    );
  };
  
  export default AddedToCart;
