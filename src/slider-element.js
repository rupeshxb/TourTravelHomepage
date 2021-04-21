import React from "react";
import "./style.css"

const SliderElement = (props) => {
  return (
    <div className="slider-element">
      <div className="subtitle">&#8212;&nbsp;&nbsp;{props.subtitle}</div>
      <div className="title">{props.title}</div>
      <div className="weather">
        {props.temp}&deg;C {props.weather}
      </div>
    </div>
  );
};

export default SliderElement;
