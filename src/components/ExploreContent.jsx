import React from "react";
import DetailExploreItem from "../pages/DetailExploreItem";
import { HeartIcon } from "./Icons";
import _get from "lodash/get";
import _size from "lodash/size";

export default function ExploreContent({ statusFlags, listVideo }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-white p-6 rounded-2xl grid grid-cols-3 max-w-6xl mx-auto px-[15px] gap-x-[20px] gap-y-[20px]">
      {_get(statusFlags, "isGetExploreSuccess") &&
        _size(listVideo) > 0 &&
        listVideo?.map((item) => (
          <div
            className="h-[320px] cursor-pointer relative"
            key={item}
            onClick={handleClick}
          >
            <video
              src={`https://doutube.s3-ap-southeast-1.amazonaws.com/public/videos/6973868113834036521.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAQWYAS3F77LZPCK5H%2F20211108%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211108T085748Z&X-Amz-Expires=900&X-Amz-Signature=a1c1e72abe33ffcab5e141f7f14c3eae6ad15a6c8adeebcc36ea132ec48ab3f5&X-Amz-SignedHeaders=host#t=0.01`}
              preload="metadata"
              // autoPlay
              // controls
              loop
              // controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              playsInline
              className="w-full h-full rounded-lg object-cover mb-35"
            ></video>
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
      {isOpen && <DetailExploreItem handleClose={handleClose} />}
    </div>
  );
}
