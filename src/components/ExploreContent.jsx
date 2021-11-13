import _get from "lodash/get";
import _size from "lodash/size";
import React from "react";
import { Default } from "react-spinners-css";
import DetailExploreItem from "../pages/DetailExploreItem";
import { HeartIcon } from "./Icons";

export default function ExploreContent({ statusFlags, listVideo }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemDetail, setItemDetail] = React.useState({});
  const handleClick = (item) => {
    setIsOpen(true);
    setItemDetail(item);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-white p-6 rounded-2xl grid grid-cols-3 max-w-6xl mx-auto px-[15px] gap-x-[20px] gap-y-[20px]">
      {!_get(statusFlags, "isGetExplore") &&
        _size(listVideo?.listVideo) > 0 &&
        listVideo?.listVideo.map((item, index) => (
          <div
            className="h-[320px] cursor-pointer relative"
            key={index}
            onClick={() => handleClick(item)}
          >
            <video
              src={`${item.video}`}
              preload="metadata"
              autoPlay
              // controls
              muted
              loop
              // controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              playsInline
              className="w-full h-full rounded-lg object-cover mb-35"
            ></video>
            <div className="absolute z-[777] bottom-0 px-3 pb-3 w-full flex justify-between items-center   ">
              <div className="text-white font-semibold">
                <HeartIcon />
                <span>{item.like}</span>
              </div>
              <img
                src={`${item.avatar}`}
                alt=""
                width={32}
                className="rounded-full"
              />
            </div>
          </div>
        ))}
      {isOpen && (
        <DetailExploreItem handleClose={handleClose} infoDetail={itemDetail} />
      )}
    </div>
  );
}
