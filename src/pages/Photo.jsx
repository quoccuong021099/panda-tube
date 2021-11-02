import React from "react";

export default function Photo() {
  return (
    <div className="bg-white p-5 rounded-2xl grid grid-cols-4 max-w-6xl mx-auto px-[15px] gap-x-[20px] gap-y-[20px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
        <div className="h-[288px]" key={item}>
          <img
            src="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
            alt=""
            className="w-full h-full rounded-lg object-cover mb-35"
          />
        </div>
      ))}
    </div>
  );
}
