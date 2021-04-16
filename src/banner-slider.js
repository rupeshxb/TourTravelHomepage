import React from "react";
import "./banner-slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./typography_.css";
import SliderElement from "./slider-element";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <SliderElement
        subtitle="The Himalayan Range"
        title="Nepal Country"
        temp="-02"
        weather="Very Cold"
      />
      <SliderElement
        subtitle="The Hilly Range"
        title="Nepal Country"
        temp="15"
        weather="Moderate"
      />
      <SliderElement
        subtitle="The Terai Region"
        title="Nepal Country"
        temp="30"
        weather="Hot and Humid"
      />
    </Slider>
  );
};

export default BannerSlider;
