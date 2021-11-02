import React from "react";
import { HeartIcon } from "./Icons";

export default function ExploreContent() {
  return (
    <div className="bg-white p-6 rounded-2xl grid grid-cols-3 max-w-6xl mx-auto px-[15px] gap-x-[20px] gap-y-[20px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
        <div className="h-[320px] cursor-pointer relative" key={item}>
          <img
            src="https://doutube.s3-ap-southeast-1.amazonaws.com/public/images/album_1348754161869196_cover.jpg"
            alt=""
            className="w-full h-full rounded-lg object-cover mb-35"
          />
          <div className="absolute z-[777] bottom-0 px-3 pb-3 w-full flex justify-between items-center   ">
            <div className="text-white font-semibold">
              <HeartIcon />
              <span>112k</span>
            </div>
            <img
              src="https://p26.douyinpic.com/img/209dc0007c6d25dfa6bea~c5_168x168.jpeg?from=116350172"
              alt=""
              width={32}
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
