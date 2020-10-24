import React, { useContext } from "react";
import Context from '../../Context';
import { NavLink } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import './Products.css';

import paw from '../../assets/icons/paw.svg';
import cart from '../../assets/icons/cart.svg';
import star from '../../assets/icons/star.svg';
import strawberry from '../../assets/icons/strawberry.svg';
import blackberry from '../../assets/icons/blackberry.svg';
import crazyBerry from '../../assets/icons/crazy-berry.svg';
import fireOrange from '../../assets/icons/fire-orange.svg';

const Products = () => {
  const context = useContext(Context);

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
                    <h1>Our Products</h1>
                </div>
                <div className="sort-container">
                    <div className="sort-label">
                        Sort
                    </div>
                    <div className="sort-select">
                        <select name="sort-options" id="sort-options" className="dropdown">
                          <option value="rating-high-low">Rating: High to Low</option>
                          <option value="rating-low-high">Rating: Low to High</option>
                          <option value="price-high-low">Price: High to Low</option>
                          <option value="price-low-high">Price: Low to High</option>
                        </select>
                    </div>
                </div>
                <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                </NavLink>
            </header>
            <div className="products-sidebar">
                <div className="products-sidebar-title">
                    Filter
                </div>
                <div className="products-sidebar-check-group">
                    <div className="products-sidebar-check-title">Pet</div>
                    <div className="products-sidebar-check-item-group">
                        <div className="products-sidebar-check-item">
                            <input type="checkbox" id="pet" name="pet" value="Cat" defaultChecked />
                            <label htmlFor="pet">Cat</label>
                        </div>
                        <div className="products-sidebar-check-item">
                            <input type="checkbox" id="pet" name="pet" value="Dog" defaultChecked />
                            <label htmlFor="pet">Dog</label>
                        </div>
                    </div>
                    
                </div>
                <div className="products-sidebar-check-group">
                    <div className="products-sidebar-check-title">Product Type</div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="product-type" name="product-type" value="Harness" />
                        <label htmlFor="product-type">Harness</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="product-type" name="product-type" value="Collar" />
                        <label htmlFor="product-type">Collar</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="product-type" name="product-type" value="Backpack" />
                        <label htmlFor="product-type">Backpack</label>
                    </div>
                </div>
                <div className="products-sidebar-check-group">
                    <div className="products-sidebar-check-title">Size</div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="size" name="size" value="Tiny" />
                        <label htmlFor="size">Tiny</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="size" name="size" value="Small" />
                        <label htmlFor="size">Small</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="size" name="size" value="Medium" />
                        <label htmlFor="size">Medium</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="size" name="size" value="Large" />
                        <label htmlFor="size">Large</label>
                    </div>
                </div>
                <div className="products-sidebar-check-group">
                    <div className="products-sidebar-check-title">Color</div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="color" name="color" value="Strawberry" />
                        <label htmlFor="color">Strawberry</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="color" name="color" value="Blackberry" />
                        <label htmlFor="color">Blackberry</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="color" name="color" value="Crazyberry" />
                        <label htmlFor="color">Crazyberry</label>
                    </div>
                    <div className="products-sidebar-check-item">
                        <input type="checkbox" id="color" name="color" value="Fire Orange" />
                        <label htmlFor="color">Fire Orange</label>
                    </div>
                </div>
            </div>

            <div className="products-wrapper">
                <div className="selected-filters">
                    <div className="selected-filter">Pet: Cat</div>
                    <div className="selected-filter">Pet: Dog</div>
                    <div className="selected-filter-label">Tap to clear</div>
                </div>
                <div className="products-grid">
                    {context.products.map((product) => (
                        <NavLink 
                            key={context.products.indexOf(product)}
                            to={`${appRoutes.products}/${context.products.indexOf(product)}`}
                            onClick={() => context.setSelectedProduct(product, context.products.indexOf(product))}
                            className="product-container"
                        >
                            <div className="product-image-container">
                                <img src={product.image} className="product-image" alt="cat harness" />
                            </div>
                            <div className="product-title">{product.name}</div>
                            <div className="product-info-container">
                                <div className="product-info-left">
                                    <div className="product-price">{product.price}</div>
                                    <div className="product-colors-container">
                                        <object type="image/svg+xml" data={strawberry} className="color-icon">Strawberry</object>
                                        <object type="image/svg+xml" data={blackberry} className="color-icon">Blackberry</object>
                                        <object type="image/svg+xml" data={crazyBerry} className="color-icon">Crazy Berry</object>
                                        <object type="image/svg+xml" data={fireOrange} className="color-icon">Fire Orange</object>
                                    </div>
                                </div>
                                <div className="product-info-right">
                                    <div className="product-review-stars-container">
                                        <object type="image/svg+xml" data={star} className="star-icon">Star</object>
                                        <object type="image/svg+xml" data={star} className="star-icon">Star</object>
                                        <object type="image/svg+xml" data={star} className="star-icon">Star</object>
                                        <object type="image/svg+xml" data={star} className="star-icon">Star</object>
                                        <object type="image/svg+xml" data={star} className="star-icon">Star</object>
                                    </div>
                                    <div className="product-reviews-description">{product.reviews} reviews</div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default Products;
