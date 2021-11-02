import React from "react";
import ExploreContent from "../components/ExploreContent";
import FeedItem from "../components/FeedItem";
import PopularHashtag from "../components/Hashtag";
import Recent from "../components/Recent";
import TopbarStory from "../components/TopbarStory";
import { categoriesHashtagData } from "../data/fakeData";

function Feed() {
  return (
    <div>
      <div className="rounded-2xl flex justify-between w-full mx-auto gap-x-[40px] gap-y-[20px]">
        <div className="w-[70%]">
          <TopbarStory />
          <Recent />
          {[1, 2, 3].map((item) => (
            <FeedItem key={item} />
          ))}
        </div>
        <div className="w-[30%]">
          <PopularHashtag title="Categories" data={categoriesHashtagData} />
        </div>
      </div>
    </div>
  );
}

export default Feed;
