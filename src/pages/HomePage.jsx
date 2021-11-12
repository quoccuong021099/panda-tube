import React from "react";
import { useDispatch } from "react-redux";
import Hashtag from "../components/Hashtag";
import SidebarAlbum from "../components/SidebarAlbum";
import { categoriesHashtagData } from "../data/fakeData";
import { getAlbum } from "../redux/actions/photo";
import DetailExploreItem from "./DetailExploreItem";

export default function HomePage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemDetailExplore, setItemDetailExplore] = React.useState(null);

  const handleOpenDetail = (item) => {
    setIsOpen(true);
    setItemDetailExplore(item);
  };
  const handleCloseDetail = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAlbum());
  }, []);

  return (
    <div>
      <div className="rounded-2xl flex justify-between w-full mx-auto gap-x-[40px] gap-y-[20px]">
        <div className="w-[70%] bg-white p-5 rounded-xl flex flex-col">
          <div className="mb-5">
            <h1 className="font-semibold text-lg">New Videos</h1>
          </div>
          <div className="grid grid-cols-3 w-[100%] mx-auto px-[20px] gap-x-[10px] gap-y-[20px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="h-[254px]"
                onClick={() => handleOpenDetail(item)}
              >
                <img
                  src="https://doutube.s3-ap-southeast-1.amazonaws.com/public/images/album_2249800595097877_0.jpg"
                  alt=""
                  className="rounded-lg"
                />
                <div className="mt-3 flex items-center">
                  <img
                    src="https://doutube.s3-ap-southeast-1.amazonaws.com/public/images/album_2249800595097877_0.jpg"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-sm font-medium dots">Tên user</p>
                    <p className="text-sm font-light dots">
                      content content content content content content content
                      content content content
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%]">
          <SidebarAlbum />
          <Hashtag title="Hashtags" data={categoriesHashtagData} />
        </div>
      </div>
      {isOpen && (
        <DetailExploreItem
          handleClose={handleCloseDetail}
          infoDetail={itemDetailExplore}
        />
      )}
    </div>
  );
}
