import React from "react";
import { Link } from "react-router-dom";

export default function SidebarMusic() {
  return (
    <div className="w-full h-auto bg-white p-5 rounded-xl shadow-sm">
      <h1 className="text-md text-blue-500 font-medium select-none">
        Trending music
      </h1>
      <ul className="mt-5">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li
            key={item}
            className="mb-5 p-4 rounded-xl cursor-pointer group hover:bg-gray-100 transition-all"
          >
            <Link to="/" className="flex items-center">
              <img
                src="https://p26.douyinpic.com/img/209dc0007c6d25dfa6bea~c5_168x168.jpeg?from=116350172"
                alt=""
                width={48}
                className="inline-block rounded-md mr-4"
              />
              <span className="select-none font-medium group-hover:text-blue-500">
                Quốc Cường
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
