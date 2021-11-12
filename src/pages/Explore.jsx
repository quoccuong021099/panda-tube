import _get from "lodash/get";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import Divider from "../components/Divider";
import ExploreContent from "../components/ExploreContent";
import PopularHashtag from "../components/Hashtag";
import SidebarMusic from "../components/SidebarMusic";
import TopbarCategory from "../components/TopbarCategory";
import { popularHashtagData } from "../data/fakeData";
import { getExplore } from "../redux/actions/explore";
function Explore() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  // get API list video
  const listVideo = useSelector((state) =>
    _get(state, "exploreReducer.listVideo")
  );
  console.log("listVideo", listVideo);
  const statusFlags = useSelector((state) =>
    _get(state, "exploreReducer.statusFlags")
  );
  console.log("statusFlags", statusFlags);
  React.useEffect(() => {
    dispatch(getExplore());
  }, []);

  return (
    <div>
      <div className="rounded-2xl flex justify-between w-full mx-auto gap-x-[40px] gap-y-[20px]">
        <div className="w-[70%]">
          <TopbarCategory url={url} />
          <ExploreContent listVideo={listVideo} statusFlags={statusFlags} />
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
