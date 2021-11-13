import React from "react";
import Slider from "react-slick";
import { categoryTopbarData } from "../data/fakeData";
import { Link } from "react-router-dom";
export default function TopbarCategory({ url }) {
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
            <Link to={`${url}/girl`} className="group-hover:text-white">
              {item}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
