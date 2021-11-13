import React from "react";
import { CommentIcon, DownloadIcon, LikeIcon, ShareIcon } from "./Icons";

export default function ContentFeedItem({
  content,
  like,
  comment,
  share,
  download,
  listTag,
}) {
  return (
    <div className="mt-5 w-full">
      <h1>
        {content ||
          "Nguyện làm chiếc bóng của người yêu thương. Cứ ôm mộng mơ đuổi theo ánh dương."}
      </h1>
      <p className="text-blue-500">
        {listTag
          ? listTag?.map((item, index) => <span key={index}>{item}</span>)
          : "#girl #cute"}
      </p>
      <div className="flex p-5 justify-between">
        <div>
          <LikeIcon />
          <span>{like || "100k"}</span>
        </div>
        <div>
          <CommentIcon />
          <span>{comment || "3,100k"}</span>
        </div>
        <div>
          <ShareIcon />
          <span>{share || "2,100k"}</span>
        </div>
        <div>
          <DownloadIcon />
          <span>{download || "1,100k"}</span>
        </div>
      </div>
    </div>
  );
}
