import React from "react";
import { Link } from "react-router-dom";
import ContentFeedItem from "../components/ContentFeedItem";
import AvatarUser from "../components/AvatarUser";
import { CloseIcon } from "../components/Icons";

export default function DetailExploreItem({ handleClose, infoDetail }) {
  console.log("infoDetail", infoDetail);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-red-500 z-[99999999] flex">
      <div className="w-[75%] bg-blue-800 relative">
        <div className="absolute z-[100] w-full h-24 bg-black flex justify-between items-center">
          <div className="flex ml-10 w-[15%] justify-between">
            <span
              className="bg-gray-500 flex w-11 h-11 rounded-full  hover:bg-gray-600 cursor-pointer text-white transition-all"
              onClick={handleClose}
            >
              <CloseIcon />
            </span>
            <Link to="/" className="inline-flex items-center mr-10">
              <img
                src="https://cdn.worldvectorlogo.com/logos/panda-7.svg"
                alt=""
                width="50"
                className="mr-3"
              />
            </Link>
          </div>
          <div className="flex mr-10 w-[15%] justify-between">
            <button className="bg-gray-500 transition-all px-4 py-2 rounded-3xl hover:bg-gray-600 font-medium text-white">
              Download
            </button>
            <button className="bg-gray-500 transition-all px-4 py-2 rounded-3xl hover:bg-gray-600 font-medium text-white">
              Report
            </button>
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/btUTQeto940"
          className="w-full h-full absolute z-0"
        ></iframe>
      </div>
      <div className="w-[25%] bg-white p-10">
        <AvatarUser />
        <ContentFeedItem />
      </div>
    </div>
  );
}
