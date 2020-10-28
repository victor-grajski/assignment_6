import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import './HomePage.css';

import banner from '../../assets/photos/landing.jpg';
import downArrow from '../../assets/icons/down-arrow.svg';
import catHarness from '../../assets/photos/cat-harness.jpg';
import catBackpack from '../../assets/photos/cat-backpack.jpg';
import catGPSCollar from '../../assets/photos/cat-gps-collar.jpg';
import dogGPSCollar from '../../assets/photos/dog-gps-collar.jpg';
import catDogHarnessFoodStorage from '../../assets/photos/cat-and-dog-harness-food-storage.jpg';
import catDogHarnessWaterStorage from '../../assets/photos/cat-and-dog-harness-water-storage.jpg';
import appRoutes from "../../shared/appRoutes";


const HomePage = () => {
    useEffect(() => {
        document.title = "Muddy Paws Adventure Gear"
    });

  return (
    <div className="container">
        <div className="landing-background-image-container">
            <img src={banner} className="landing-background-image" alt="banner" />
        </div>
        <div className="landing-title-container">
            <h1 className="landing-title landing-text">Muddy Paws Adventure Gear</h1>
        </div>
        <div className="landing-subtitle-container">
            <h3 className="landing-subtitle landing-text">Customizable hiking and adventuring gear for your cat or dog</h3>
        </div>
        <div className="landing-top-cta-container">
            <NavLink to={appRoutes.products}><div className="landing-cta-button drop-shadow">Shop Now</div></NavLink>
        </div>
        <div className="landing-learn-more-container">
            <p className="landing-text">Learn More</p>
            <object type="image/svg+xml" data={downArrow}>Down Arrow</object>
        </div>

        <div className="landing-below-the-fold-wrapper"></div>

        <div className="landing-description-container">
            <p className="landing-text">
                We are a small store that sells customizable hiking and adventuring gear for your cat or dog.
                We are committed to helping all cats and dogs live to their full potential, experiencing the
                wild alongside their human hiker pals!
            </p>
        </div>
        <div className="for-cats featured">
            <div className="featured-title-container">
                <h2 className="landing-text">For Cats</h2>
            </div>
            <div className="for-cats-grid">
                <div className="for-cats-grid-item">
                    <img src={catHarness} className="featured-image" alt="cat harness" />
                    <p className="landing-text">Harnesses</p>
                </div>
                <div className="for-cats-grid-item">
                    <img src={catBackpack} className="featured-image" alt="cat backpack" />
                    <p className="landing-text">Backpacks</p>
                </div>
                <div className="for-cats-grid-item">
                    <img src={catGPSCollar} className="featured-image" alt="cat gps collar" />
                    <p className="landing-text">GPS Collars</p>
                </div>
            </div>
        </div>
        <div className="for-dogs featured">
            <div className="featured-title-container">
                <h2 className="landing-text">For Dogs</h2>
            </div>
            <div className="for-dogs-grid">
                <div className="for-dogs-grid-item">
                    <img src={catGPSCollar} className="featured-image" alt="cat-gps-collar" />
                    <p className="landing-text">Harnesses</p>
                </div>
                <div className="for-dogs-grid-item">
                    <img src={dogGPSCollar} className="featured-image" alt="dog-gps-collar" />
                    <p className="landing-text">GPS Collars</p>
                </div>
            </div>
        </div>
        <div className="for-cats-and-dogs featured">
            <div className="featured-title-container">
                <h2 className="landing-text">For Cats and Dogs</h2>
            </div>
            <div className="for-cats-and-dogs-grid">
                <div className="for-cats-and-dogs-grid-item">
                    <img src={catDogHarnessFoodStorage} className="featured-image" alt="cat and dog harness food storage" />
                    <p className="landing-text">Harness Food Storage</p>
                </div>
                <div className="for-cats-and-dogs-grid-item">
                    <img src={catDogHarnessWaterStorage} className="featured-image" alt="cat and dog harness water storage" />
                    <p className="landing-text">Harness Water Storage</p>
                </div>
            </div>
        </div>
        <div className="landing-bottom-cta-container">
            <NavLink to={appRoutes.products}><div className="landing-cta-button drop-shadow">Shop Now</div></NavLink>
        </div>
    </div>
  );
};

export default HomePage;
