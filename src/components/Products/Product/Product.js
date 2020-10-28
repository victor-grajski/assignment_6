import React, { useContext, useState } from "react";
import Context from '../../../Context';
import { useParams, NavLink } from "react-router-dom";
import appRoutes from "../../../shared/appRoutes";
import products from '../../../shared/products';
import './Product.css';

import paw from '../../../assets/icons/paw.svg';
import cart from '../../../assets/icons/cart.svg';
import downArrowDark from '../../../assets/icons/down-arrow-dark.svg';
import star from '../../../assets/icons/star.svg';
import starEmpty from '../../../assets/icons/star-empty.svg';
import starSmall from '../../../assets/icons/star-small.svg';
import rightArrow from '../../../assets/icons/right-arrow.svg';
import password from '../../../assets/icons/password.svg';
import starSmallEmpty from '../../../assets/icons/star-small-empty.svg';
import strawberryDetail from '../../../assets/icons/strawberry-detail.svg';
import strawberryDetailSelected from '../../../assets/icons/strawberry-detail-selected.svg';
import blackberryDetail from '../../../assets/icons/blackberry-detail.svg';
import blackberryDetailSelected from '../../../assets/icons/blackberry-detail-selected.svg';
import crazyBerryDetail from '../../../assets/icons/crazyberry-detail.svg';
import crazyBerryDetailSelected from '../../../assets/icons/crazyberry-detail-selected.svg';
import fireOrangeDetail from '../../../assets/icons/fire-orange-detail.svg';
import fireOrangeDetailSelected from '../../../assets/icons/fire-orange-detail-selected.svg';

import dogHarnessFoodStorage from '../../../assets/photos/dog-harness-food-storage.jpg';
import dogHarnessWaterStorage from '../../../assets/photos/dog-harness-water-storage.jpg';
import huskerino from '../../../assets/photos/huskerino.jpg';
import pointyBoye from '../../../assets/photos/pointy-boye.jpg';

// TODO: change image
// TODO: cat additional images
// TODO: descriptions
const Product = () => {
  const context = useContext(Context);
  const { id } = useParams();
  const product = products[id];
  let { image, name, description, reviews, type, price, rating } = product;

  const [size, setSize] = useState("Tiny");
  const [color, setColor] = useState("Blackberry");
  const [quantity, setQuantity] = useState(1);

  let numItems = 0;

  if (context.cartItems) {
      for (let item of context.cartItems) {
          numItems += parseInt(item.quantity);
      }
  }

  const createStarObjects = () => {
      let starObjects = [];
      for (let i = 0; i < rating; i++) {
          starObjects.push(<object type="image/svg+xml" data={star} className="star-icon" key={i}>Star</object>);
      }
      for (let j = rating; j < 5; j++) {
        starObjects.push(<object type="image/svg+xml" data={starEmpty} className="star-icon" key={j}>Empty Star</object>);
      }
      return starObjects;
  };

  const createSizeSelect = () => {
    let sizeSelectOptions = [];
    let sizeSelectValues = [
        "Tiny",
        "Small",
        "Medium",
        "Large"
    ];
    for (let size of sizeSelectValues) {
        sizeSelectOptions.push(<option key={size} value={size}>{size}</option>);
    }
    return sizeSelectOptions;
}

  const createQuantitySelect = () => {
    let quantitySelectItems = [];
    for (var i = 1; i <= 4; i++) {
        quantitySelectItems.push(<option key={i} value={i}>{i}</option>);
    }
    return quantitySelectItems;
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
            
            <div className="products-link-container">
                <NavLink to={appRoutes.products} className="header-link">Products</NavLink>
            </div>
            <NavLink to={appRoutes.cart} className="cart-container">
                    <img type="image/svg+xml" src={cart} className="cart-icon" alt="cart" />
                    <div className="cart-quantity-label">{numItems}</div>
            </NavLink>
            
        </header>

        <div className="detail-addl-images">
            {type === "dog" ? (
                <div>
                    <img src={dogHarnessFoodStorage} className="detail-addl-image drop-shadow" alt="additional" />
                    <img src={dogHarnessWaterStorage} className="detail-addl-image drop-shadow" alt="additional" />
                    <img src={huskerino} className="detail-addl-image drop-shadow" alt="additional" />
                    <img src={pointyBoye} className="detail-addl-image drop-shadow" alt="additional" />
                </div>
            ) : (
                <div>
                    <img src="assets/photos/dog-harness-food-storage.jpg" className="detail-addl-image drop-shadow" alt="additional" />
                    <img src="assets/photos/dog-harness-water-storage.jpg" className="detail-addl-image drop-shadow" alt="additional" />
                    <img src="assets/photos/huskerino.jpg" className="detail-addl-image drop-shadow" alt="additional" />
                    <img src="assets/photos/pointy-boye.jpg" className="detail-addl-image drop-shadow" alt="additional" />
                </div>
            )}
            
            <object type="image/svg+xml" data={downArrowDark}>Down Arrow</object>
        </div>
        <div className="detail-main-image-container">
            <img src={image} className="detail-main-image drop-shadow" alt="main" />
        </div>
        <div className="detail-main-info-wrapper">
            <div className="detail-main-info">
                <h3 className="detail-title">{name}</h3>
                <p className="detail-price">{price}</p>
                <div className="detail-info-reviews-container">
                    <div className="detail-info-review-stars-container">
                        {createStarObjects()}
                    </div>
                    <div className="detail-info-reviews-description">{reviews} reviews</div>
                </div>
            </div>
            <div className="detail-size-color">
                <div className="detail-size-container">
                    <div className="detail-size-label">Size</div>
                    <div className="detail-size-dropdown-container">
                        <select 
                            defaultValue={size}
                            onChange={(e) => setSize(e.target.value)}
                            name="size-options" 
                            className="detail-size-dropdown dropdown drop-shadow" 
                            id="size-options"
                        >
                            {createSizeSelect()}
                        </select>
                    </div>
                </div>
                <div className="detail-color-container">
                    <div className="detail-color-label">Color</div>
                    <div className="detail-color-picker">
                        <div className="tooltip">
                            {color === "Strawberry" ? (
                                <img 
                                    type="image/svg+xml" 
                                    src={strawberryDetailSelected} 
                                    onClick={() => setColor("Strawberry")}
                                    className="color-icon"
                                    alt="strawberry"  
                                />
                            ) : (
                                <img 
                                    type="image/svg+xml" 
                                    src={strawberryDetail} 
                                    onClick={() => setColor("Strawberry")}
                                    className="color-icon"
                                    alt="strawberry"  
                                />
                            )}
                            <span className="tooltiptext">Strawberry</span>
                        </div>
                        <div className="tooltip">
                            {color === "Blackberry" ? (
                                <img 
                                    type="image/svg+xml" 
                                    src={blackberryDetailSelected} 
                                    onClick={() => setColor("Blackberry")}
                                    className="color-icon"
                                    alt="Blackberry"  
                                />
                            ) : (
                                <img 
                                    type="image/svg+xml" 
                                    src={blackberryDetail} 
                                    onClick={() => setColor("Blackberry")}
                                    className="color-icon"
                                    alt="Blackberry"  
                                />
                            )}
                            <span className="tooltiptext">Blackberry</span>
                        </div>
                        <div className="tooltip">
                            {color === "Crazy Berry" ? (
                                <img 
                                    type="image/svg+xml" 
                                    src={crazyBerryDetailSelected} 
                                    onClick={() => setColor("Crazy Berry")}
                                    className="color-icon"
                                    alt="Crazy Berry"  
                                />
                            ) : (
                                <img 
                                    type="image/svg+xml" 
                                    src={crazyBerryDetail} 
                                    onClick={() => setColor("Crazy Berry")}
                                    className="color-icon"
                                    alt="Crazy Berry"  
                                />
                            )}
                            <span className="tooltiptext">Crazy Berry</span>
                        </div>
                        <div className="tooltip">
                            {color === "Fire Orange" ? (
                                <img 
                                    type="image/svg+xml" 
                                    src={fireOrangeDetailSelected} 
                                    onClick={() => setColor("Fire Orange")}
                                    className="color-icon"
                                    alt="Fire Orange"  
                                />
                            ) : (
                                <img 
                                    type="image/svg+xml" 
                                    src={fireOrangeDetail} 
                                    onClick={() => setColor("Fire Orange")}
                                    className="color-icon"
                                    alt="Fire Orange"  
                                />
                            )}
                            <span className="tooltiptext">Fire Orange</span>
                        </div>
                    </div>
                    <div className="detail-color-selected-label">{color}</div>
                </div>
            </div>
            <div className="detail-description">{description}</div>
        </div>
        

        <div className="detail-reviews-container">
            <div className="detail-reviews-first-row">
                <div className="detail-reviews-first-row-title">Customer Reviews</div>
                <div className="detail-reviews-first-row-label">All reviews have a verified purchase</div>
            </div>
            <div className="detail-reviews-second-row">By Feature</div>
            <div className="detail-reviews-third-row">
                <div className="true-to-size-container">
                    <div className="true-to-size-label">True to Size</div>
                    <div className="detail-reviews-stars">
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                    </div>
                    <div className="detail-reviews-rating">5.0</div>
                </div>
                <div className="comfort-container">
                    <div className="comfort-label">Comfort</div>
                    <div className="detail-reviews-stars">
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmallEmpty}>Empty Star</object>
                    </div>
                    <div className="detail-reviews-rating">4.0</div>
                </div>
                
                
                
            </div>
            <div className="detail-reviews-fourth-row">
                <div className="cuteness-container">
                    <div className="cuteness-label">Cuteness</div>
                    <div className="detail-reviews-stars">
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                    </div>
                    <div className="detail-reviews-rating">5.0</div>
                </div>
                <div className="durability-container">
                    <div className="durability-label">Durability</div>
                    <div className="detail-reviews-stars">
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmall}>Star</object>
                        <object type="image/svg+xml" data={starSmallEmpty}>Empty Star</object>
                    </div>
                    <div className="detail-reviews-rating">4.0</div>
                </div>
            </div>
            <div className="detail-reviews-fifth-row">
                <p>See All Reviews</p>
                <object type="image/svg+xml" data={rightArrow} className="right-arrow"> Right Arrow</object>
            </div>
        </div>

        <div className="detail-cta drop-shadow">
            <div className="quantity-container">
                <div className="quantity-label">Quantity</div>
                <div className="quantity-dropdown-container">
                    <select 
                        defaultValue={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        name="quantity-options" 
                        className="quantity-dropdown dropdown light drop-shadow" 
                        id="quantity-options"
                    >
                        {createQuantitySelect()}
                    </select>
                </div>
            </div>
            <div className="return-policy-container">
                <div className="return-policy-label">30 Day Return Policy</div>
            </div>
            <div className="secure-transaction-container">
                <div className="secure-transaction-icon">
                    <object type="image/svg+xml" data={password} className="color-icon">Secure Transaction</object>
                </div>
                <div className="secure-transaction-label">Secure Transaction</div>
            </div>
            <div className="add-to-cart-container">
                <NavLink 
                    to={appRoutes.addedToCart} 
                    onClick={() => context.addToCart(product, quantity, size, color)}
                    className="detail-add-to-cart-link">
                    <div className="detail-add-to-cart-button drop-shadow">
                        Add to Cart
                    </div>
                </NavLink>
            </div>
            <div className="buy-now-container">
                <div className="detail-buy-now-button drop-shadow">Buy Now</div>
            </div>
        </div>
    </div>
  );
};

export default Product;
