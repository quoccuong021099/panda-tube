import React from "react";
import { CloseIcon } from "../components/Icons";
const stories = [
  {
    url: "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
    duration: 1000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
  },
  {
    url: "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
    duration: 1000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
    seeMore: ({ close }) => {
      return <div>Hello, click to close this.</div>;
    },
  },
  //   {
  //     url: "https://example.com/vid.mp4",
  //     duration: 5000, // ignored
  //     type: "video",
  //   },
];
import Stories from "react-insta-stories";
export default function DetailStory({ handleClose }) {
  return (
    <div>
      <div
        className="fixed z-[9999999] top-0 bottom-0 left-0 right-0 bg-[#111827] opacity-[.9] flex justify-center items-center "
        onClick={handleClose}
      >
        <span
          className="fixed z-[99999999] right-5 top-5 bg-gray-500 flex w-11 h-11 rounded-full  hover:bg-gray-600 cursor-pointer text-white transition-all"
          onClick={handleClose}
        >
          <CloseIcon />
        </span>
      </div>
      <div className="fixed z-[999999999] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black rounded-lg w-[417px] h-[742px]">
        <Stories
          stories={stories}
          defaultInterval={1000}
          width={417}
          height={742}
          className="opacity-100"
        />
      </div>
    </div>
  );
}
