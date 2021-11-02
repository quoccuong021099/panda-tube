import React from "react";
import Slider from "react-slick";
import { categoryTopbarData } from "../data/fakeData";

export default function TopbarCategory() {
  const settings = {
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        {categoryTopbarData.map((item, index) => (
          <div
            key={index}
            className="timtim bg-white shadow-md  flex items-center justify-center text-center text-xs font-medium h-[80px] group rounded-md hover:bg-blue-500 cursor-pointer"
          >
            <span className="group-hover:text-white">{item}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
