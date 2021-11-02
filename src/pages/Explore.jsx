import React from "react";
import Divider from "../components/Divider";
import ExploreContent from "../components/ExploreContent";
import PopularHashtag from "../components/Hashtag";
import SidebarMusic from "../components/SidebarMusic";
import TopbarCategory from "../components/TopbarCategory";
import { popularHashtagData } from "../data/fakeData";

function Explore() {
  return (
    <div>
      <div className="rounded-2xl flex justify-between w-full mx-auto gap-x-[40px] gap-y-[20px]">
        <div className="w-[70%]">
          <TopbarCategory />
          <ExploreContent />
        </div>
        <div className="w-[30%]">
          <SidebarMusic />
          <Divider />
          <PopularHashtag title="Popular Hashtags" data={popularHashtagData} />
        </div>
      </div>
    </div>
  );
}

export default Explore;
