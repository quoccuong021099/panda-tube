import React from "react";
import { Link } from "react-router-dom";
export default function Hashtag({ title, data }) {
  return (
    <div>
      <h1 className="text-blue-500 font-extralight">{title}</h1>
      <ul className="flex flex-wrap mt-3">
        {data.map((item) => (
          <li
            key={item.id}
            className="border bg-white py-1 px-2 mr-2 hover:text-blue-500 mb-2 rounded-md"
          >
            <Link to={item.path} className="font-normal text-sm">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
