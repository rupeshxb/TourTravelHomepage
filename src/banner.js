import React from "react";
import BannerSlider from "./banner-slider";
import "./banner.css";
import "./typography_.css";

const BannerComponent = () => {
  return (
    <div className="container">
      <div className="slider">
        <BannerSlider />
      </div>
      <div className="payment">
        <div className="payment-container">
          <div className="icon">
            <a href="#">
              <i class="far fa-credit-card"></i>
            </a>
          </div>
          <div className="description">
            <div className="name">
              We Accept Payment Through All Cards & Banking
            </div>
            <div className="book">
              <a href="#">Book Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
