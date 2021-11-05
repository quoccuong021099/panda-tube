import React from "react";
import { CloseIcon } from "./Icons";
import { useForm } from "react-hook-form";

export default function CreateAlbum({ handleClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[9999999] bg-black opacity-90 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-white p-7 relative z-[99999999] rounded-lg"
      >
        <h1 className="text-xl text-center font-semibold">Create album</h1>
        <div className="mt-5">
          <label
            htmlFor="albumName"
            className="block text-gray-700 font-medium text-sm mb-2"
          >
            Album name :
          </label>
          <input
            {...register("albumName")}
            id="albumName"
            type="text"
            className="w-full outline-none bg-blue-300 rounded-xl px-2 py-[6px] text-[10px]"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="album"
            className="block text-gray-700 font-medium text-sm mb-2"
          >
            Url image :
          </label>
          <input
            id="album"
            {...register("album")}
            type="text"
            className="w-full outline-none bg-blue-300 rounded-xl px-2 py-[6px] text-[10px]"
          />
        </div>
        <p className="text-[12px] mt-5 font-semibold text-blue-500">
          Let's create beautiful albums together!
        </p>
        <div className="mt-5 flex justify-end">
          <button
            className="text-white font-medium text-sm bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Create
          </button>
        </div>

        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={handleClose}
        >
          <CloseIcon />
        </div>
      </form>
    </div>
  );
}
