import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, resetFlagPhoto } from "../redux/actions/photo";
import _get from "lodash/get";
import _size from "lodash/size";
import { AddIcon } from "../components/Icons";
import CreateAlbum from "../components/CreateAlbum";
import DetailAlbum from "../components/DetailAlbum";

export default function Photo() {
  const [isOpenCreateAlbum, setIsOpenCreateAlbum] = React.useState(false);
  const [isOpenDetailAlbum, setIsOpenDetailAlbum] = React.useState(false);
  const [albumItem, setAlbumItem] = React.useState(null);

  const dispatch = useDispatch();

  const statusFlags = useSelector((state) =>
    _get(state, "photoReducer.statusFlags")
  );

  const listAlbum = useSelector((state) =>
    _get(state, "photoReducer.listAlbum")
  );

  React.useEffect(() => {
    dispatch(getAlbum());
  }, []);

  const handleOpenDetailAlbum = (item) => {
    setAlbumItem(item);
    setIsOpenDetailAlbum(true);
  };

  const handleOpenCreateAlbum = () => {
    setIsOpenCreateAlbum(true);
  };

  const handleCloseCreateAlbum = () => {
    setIsOpenCreateAlbum(false);
    dispatch(resetFlagPhoto());
  };

  const handleCloseDetailAlbum = () => {
    setIsOpenDetailAlbum(false);
    // dispatch(resetFlagPhoto());
  };

  return (
    <div className="bg-white p-5 rounded-2xl">
      {!_get(statusFlags, "isLoading") && _size(listAlbum) === 0 && (
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://png.pngtree.com/element_our/20200610/ourmid/pngtree-no-data-on-the-computer-image_2238447.jpg"
            alt=""
            className="w-[300px] h-[200px]"
          />
          <h1 className="text-center mt-5 text-blue-600 font-semibold ">
            There are currently no albums to display!
          </h1>
        </div>
      )}
      <div className=" grid grid-cols-4 max-w-[100%] mx-auto px-[20px] gap-x-[20px] gap-y-[20px]">
        {_get(statusFlags, "isLoading") &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div className="h-[288px] bg-gray-400 rounded-lg" key={item}></div>
          ))}

        {!_get(statusFlags, "isLoading") &&
          listAlbum
            ?.map((item) => (
              <div
                key={item._id}
                className="h-[288px] cursor-pointer"
                onClick={() => handleOpenDetailAlbum(item)}
              >
                <img
                  src={item.album[0]}
                  alt={item.albumName}
                  className="w-full h-full rounded-lg object-cover mb-35"
                />
              </div>
            ))
            .reverse()}
      </div>
      <button
        className="bg-blue-500 p-2 flex items-center justify-center text-white rounded-full fixed bottom-5 right-5"
        onClick={handleOpenCreateAlbum}
      >
        <AddIcon />
      </button>
      {isOpenCreateAlbum && (
        <CreateAlbum handleClose={handleCloseCreateAlbum} />
      )}
      {isOpenDetailAlbum && (
        <DetailAlbum
          handleClose={handleCloseDetailAlbum}
          albumItem={albumItem}
        />
      )}
    </div>
  );
}
