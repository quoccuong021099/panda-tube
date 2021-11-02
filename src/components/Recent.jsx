import React from "react";
import { recentHashtagData } from "../data/fakeData";
import Hashtag from "./Hashtag";

export default function Recent() {
  return (
    <div className="flex justify-between items-center mt-[-50px] z-50 relative">
      <h1 className="text-2xl ">Recent Videos</h1>
      <Hashtag data={recentHashtagData} />
    </div>
  );
}
