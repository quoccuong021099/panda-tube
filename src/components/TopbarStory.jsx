import React from "react";
import Slider from "react-slick";
import { categoryTopbarData } from "../data/fakeData";
import DetailStory from "../pages/DetailStory";

export default function TopbarStory() {
  const settings = {
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 2,
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Slider {...settings}>
        {categoryTopbarData.map((item, index) => (
          <div
            key={index}
            className="timtim flex flex-col items-center justify-center"
            onClick={handleClick}
          >
            <div className="w-[64px] h-[70px] flex items-center relative cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
                alt=""
                className="rounded-full w-[58px] h-[58px] border-2 border-white outline-class "
              />
              <span className="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full bottom-1 right-3"></span>
            </div>
            <span className="font-light text-sm mt-1 text-center">{item}</span>
          </div>
        ))}
      </Slider>
      {isOpen && <DetailStory handleClose={handleClose} />}
    </div>
  );
}
