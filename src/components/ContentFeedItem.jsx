import React from "react";
import { CommentIcon, DownloadIcon, LikeIcon, ShareIcon } from "./Icons";

export default function ContentFeedItem() {
  return (
    <div className="mt-5 w-full">
      <h1>
        咱就是说 今天也是走一个夜晚操场帅哥的路线#chunky舞蹈挑战 咱就是说
        今天也是走一个夜晚操场帅哥的路线#chunky舞蹈挑战
      </h1>
      <p className="text-blue-500">#girl #cute</p>
      <div className="flex p-5 justify-between">
        <div>
          <LikeIcon />
          <span>100k</span>
        </div>
        <div>
          <CommentIcon />
          <span>3,100k</span>
        </div>
        <div>
          <ShareIcon />
          <span>2,100k</span>
        </div>
        <div>
          <DownloadIcon />
          <span>1,100k</span>
        </div>
      </div>
    </div>
  );
}
