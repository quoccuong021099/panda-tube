import React from "react";
import AvatarUser from "./AvatarUser";
import ContentFeedItem from "./ContentFeedItem";
export default function FeedItem() {
  return (
    <div className="h-auto bg-white rounded-xl p-5 flex gap-x-10 mb-10">
      <iframe
        src="https://www.youtube.com/embed/btUTQeto940"
        className="rounded-xl w-[50%]"
      ></iframe>
      <div className="w-[50%]">
        <AvatarUser />
        <ContentFeedItem />
      </div>
    </div>
  );
}
