import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomCard from "./CustomCard";

function CarouselSec({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  // console.log(children);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {children.map((data) => (
          <CustomCard key={data.id} data={data} />
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSec;
