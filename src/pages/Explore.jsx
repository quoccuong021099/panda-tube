import _get from "lodash/get";
import _size from "lodash/size";
import _lowerCase from "lodash/lowerCase";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { useLocation } from "react-router-dom";
import Divider from "../components/Divider";
import ExploreContent from "../components/ExploreContent";
import PopularHashtag from "../components/Hashtag";
import SidebarMusic from "../components/SidebarMusic";
import TopbarCategory from "../components/TopbarCategory";
import { popularHashtagData } from "../data/fakeData";
import { Default } from "react-spinners-css";
import { getExplore } from "../redux/actions/explore";

function Explore() {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  const titlePathName = pathname.slice(9);
  const dispatch = useDispatch();
  // get API list video
  const listVideo = useSelector((state) =>
    _get(state, "exploreReducer.listVideo")
  );
  console.log("listVideo", listVideo);
  const statusFlags = useSelector((state) =>
    _get(state, "exploreReducer.statusFlags")
  );
  React.useEffect(() => {
    dispatch(getExplore());
  }, []);

  return (
    <div>
      <div className="rounded-2xl flex justify-between w-full mx-auto gap-x-[40px] gap-y-[20px]">
        <div className="w-[70%]">
          <TopbarCategory url={url} listVideo={listVideo} />
          <div className="flex justify-center">
            {_size(listVideo) === 0 && <Default color="blue" size={40} />}
          </div>
          {listVideo?.map(
            (item, index) =>
              _lowerCase(item.title) === titlePathName && (
                <ExploreContent
                  listVideo={item}
                  statusFlags={statusFlags}
                  key={index}
                />
              )
          )}
          {!titlePathName && _size(listVideo) > 0 && (
            <ExploreContent
              listVideo={listVideo[0]}
              statusFlags={statusFlags}
            />
          )}
        </div>
        <div className="w-[30%]">
          <SidebarMusic />
          <Divider />
          <PopularHashtag title="Popular Hashtags" data={popularHashtagData} />
        </div>
      </div>
    </div>
  );
}

export default Explore;
