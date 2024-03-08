import React from "react";
import Slider from "react-slick";
import './sentimentCarousel.css'

function SentimentCarousel() {
  const settings = {
    className: "slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        
      <div className="bg-green-100 h-60 rounded-md p-2 w-3/4 !flex gap-4 mx-2">
          <div className="w-10 h-10 rounded-full bg-green-500"></div>
          <div className="flex-1">
            <h4 className="text-black font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              perferendis quidem facilis. Soluta totam amet quos maxime repellat
              harum doloribus.
            </p>
          </div>
        </div>
        <div className="bg-blue-100 h-60 rounded-md p-2 !flex gap-4 ">
          <div className="w-10 h-10 rounded-full bg-blue-500"></div>
          <div className="flex-1">
            <h4 className="text-black font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              perferendis quidem facilis. Soluta totam amet quos maxime repellat
              harum doloribus.
            </p>
          </div>
        </div>
        <div className="bg-green-100 h-60 rounded-md p-2 !flex gap-4 ">
          <div className="w-10 h-10 rounded-full bg-green-500"></div>
          <div className="flex-1">
            <h4 className="text-black font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              perferendis quidem facilis. Soluta totam amet quos maxime repellat
              harum doloribus.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SentimentCarousel;
