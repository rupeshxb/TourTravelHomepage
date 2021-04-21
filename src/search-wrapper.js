import React from "react";
import "./style.css";

const SearchWrapper = () => {
  return (
    <div className="search-wrapper">
      <div className="search-wrapper-inner d-flex flex-row justify-content-between">
        <div className="search-element">
          <h4>Location</h4>
          <div className="input-field">
            <input type="text" placeholder="Enter your destination"></input>
            <i class="fas fa-map-pin"></i>
          </div>
        </div>
        <div className="sample-border"></div>
        <div className="search-element">
          <h4>Activity</h4>
          <div className="input-field">
            <input type="text" placeholder="Bungee Jump"></input>
            <i class="fas fa-arrow-alt-circle-down"></i>
          </div>
        </div>
        <div className="sample-border"></div>
        <div className="search-element">
          <h4>Date</h4>
          <div className="input-field">
            <input type="text" placeholder="Enter Date"></input>
            <i class="fas fa-calendar-week"></i>
          </div>
        </div>
        <div className="search-icon">
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;
