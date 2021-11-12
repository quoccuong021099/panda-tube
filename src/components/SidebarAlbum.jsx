import _get from "lodash/get";
import _size from "lodash/size";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Default } from "react-spinners-css";
import CreateAlbum from "./CreateAlbum";
import DetailAlbum from "./DetailAlbum";
import { ArrowLeft } from "./Icons";

export default function SidebarAlbum() {
  // get status flag and get list album
  const statusFlags = useSelector((state) =>
    _get(state, "photoReducer.statusFlags")
  );

  const listAlbum = useSelector((state) =>
    _get(state, "photoReducer.listAlbum")
  );

  // New Album
  const [isOpen, setIsOpen] = React.useState(false);

  const HandleNewAlbum = () => {
    setIsOpen(true);
  };
  const HandleCloseNewAlbum = () => {
    setIsOpen(false);
  };

  // Detail Album
  const [isOpenDetailAlbum, setIsOpenDetailAlbum] = React.useState(false);
  const [albumItem, setAlbumItem] = React.useState(null);

  const HandleDetailAlbum = (item) => {
    setIsOpenDetailAlbum(true);
    setAlbumItem(item);
  };
  const HandleCloseDetailAlbum = () => {
    setIsOpenDetailAlbum(false);
  };

  return (
    <div className="mb-5">
      <div
        className=" text-gray-500 hover:text-blue-500 transition text-sm flex justify-between items-center content-center dark:text-gray-300 dark:hover:text-gray-200
      "
      >
        <h1 className="cursor-pointer" onClick={HandleNewAlbum}>
          New Albums
        </h1>
        <h1 className="flex items-center cursor-pointer">
          <Link to="/photo">View All</Link> <ArrowLeft />
        </h1>
      </div>
      {_get(statusFlags, "isLoading") && (
        <div className="flex justify-center items-center mt-5">
          <Default color="blue" size={40} />
        </div>
      )}
      <div className="grid grid-cols-3 w-[100%] mx-auto  gap-x-[10px] gap-y-[10px] mt-[10px]">
        {!_get(statusFlags, "isLoading") &&
          _size(listAlbum) > 0 &&
          listAlbum.slice(0, 9).map((item, index) => (
            <div
              key={item._id}
              className="cursor-pointer h-[109px]"
              onClick={() => HandleDetailAlbum(item)}
            >
              <img
                src={item.album[0]}
                alt={item.albumName}
                className="w-full h-full rounded-lg object-cover mb-35"
              />
            </div>
          ))}
      </div>
      {isOpen && <CreateAlbum handleClose={HandleCloseNewAlbum} />}
      {isOpenDetailAlbum && (
        <DetailAlbum
          handleClose={HandleCloseDetailAlbum}
          albumItem={albumItem}
        />
      )}
    </div>
  );
}
