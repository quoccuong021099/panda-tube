import React from "react";

export default function AvatarUser() {
  return (
    <div className="w-full">
      <div className="flex gap-x-5 w-full items-center justify-between">
        <div className="flex gap-x-5 items-center">
          <div className="relative w-12">
            <img
              src="https://p6.douyinpic.com/img/tos-cn-avt-0015/847dfd2865ed5d75ee1b147029e85572~c5_100x100.jpeg?from=2956013662"
              alt=""
              className="rounded-full"
            />
            <span className="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full bottom-0 right-0"></span>
          </div>
          <span className="text-lg font-medium w-[200px]">
            o.nb666 o.nb666 o.nb666
          </span>
        </div>
        <button className=" border border-[red] text-red-500 hover:bg-red-50 px-4 py-1 rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
}
