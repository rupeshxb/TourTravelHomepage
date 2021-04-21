import React from "react";
import BannerSlider from "./banner-slider";
import SearchWrapper from "./search-wrapper";
import "./style.css";

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
      <SearchWrapper />
    </div>
  );
};

export default BannerComponent;
