import React from "react";
import { Link } from "react-router-dom";
import { ExploreIcon, PhotoIcon, VideoFeedIcon } from "./Icons";
function Navbar() {
  return (
    <div className="z-[99999] fixed w-[1200px] px-5 py-3 top-0  shadow-sm border-b-[1px] border-[#eee] bg-[#fff] rounded-b-lg">
      <div className="flex justify-between ">
        <div className="flex">
          <Link to="/" className="inline-flex items-center mr-10">
            <img
              src="https://cdn.worldvectorlogo.com/logos/panda-7.svg"
              alt=""
              width="50"
              className="mr-3"
            />
            <span className="text-xl font-semibold">PandaTube</span>
          </Link>
          <div className="inline-flex items-center">
            <Link to="/feed" className="inline-flex items-center mr-5 ">
              <VideoFeedIcon />
              <span className="text-xl font-normal">Video Feed</span>
            </Link>
            <Link to="/explore" className="inline-flex items-center mr-5 ">
              <ExploreIcon />
              <span className="text-xl font-normal">Explore</span>
            </Link>
            <Link to="/photo" className="inline-flex items-center mr-5 ">
              <PhotoIcon />
              <span className="text-xl font-normal">Photos</span>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/login" className="inline-flex items-center mr-5">
            <span className="text-xl font-medium text-blue-500">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
