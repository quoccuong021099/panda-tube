import React from "react";
import { CloseIcon, FullScreenIcon } from "./Icons";
import _get from "lodash/get";

export default function DetailAlbum({ handleClose, albumItem }) {
  console.log("albumItem", albumItem);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0  z-[99999] bg-black">
      <span
        className="fixed z-[99999999] right-5 top-5  flex w-11 h-11 rounded-full  hover:bg-gray-600 cursor-pointer text-white transition-all"
        onClick={handleClose}
      >
        <CloseIcon />
      </span>
      <div className="flex justify-center items-center h-[100vh]">
        <img src={_get(albumItem, "album[0]")} alt="" className="w-[40%]" />
      </div>
    </div>
  );
}
