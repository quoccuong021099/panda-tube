import _get from "lodash/get";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { resetFlag } from "../redux/actions/auth";
import { ExploreIcon, PhotoIcon, VideoFeedIcon } from "./Icons";
export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = React.useState(false);

  const statusFlags = useSelector((state) =>
    _get(state, "loginReducer.statusFlags")
  );

  const isLogin = localStorage.getItem("loginSC");

  React.useEffect(() => {
    if (_get(statusFlags, "isLoginSuccess") || isLogin) {
      setLogin(true);
    }
  }, [_get(statusFlags, "isLoginSuccess"), isLogin]);

  const handleLog = () => {
    if (login) {
      dispatch(resetFlag());
      localStorage.removeItem("loginSC");
      setLogin(false);
    }
    history.push("/login");
  };

  return (
    <div className="z-[99999] fixed w-[1200px] px-5 py-3 top-0  shadow-sm border-b-[1px] border-[#eee] bg-[#fff] rounded-b-lg">
      <div className="flex justify-between ">
        <div className="flex">
          <Link to="/" className="inline-flex items-center mr-10">
            <img
              src="https://cdn.worldvectorlogo.com/logos/panda-7.svg"
              alt=""
              width="50"
              className="mr-3"
            />
            <span className="text-xl font-semibold">PandaTube</span>
          </Link>
          <div className="inline-flex items-center">
            <Link to="/feed" className="inline-flex items-center mr-5 ">
              <VideoFeedIcon />
              <span className="text-xl font-normal">Video Feed</span>
            </Link>
            <Link to="/explore" className="inline-flex items-center mr-5 ">
              <ExploreIcon />
              <span className="text-xl font-normal">Explore</span>
            </Link>
            <Link to="/photo" className="inline-flex items-center mr-5 ">
              <PhotoIcon />
              <span className="text-xl font-normal">Photos</span>
            </Link>
          </div>
        </div>
        <div>
          <p
            className="inline-flex items-center mr-5 cursor-pointer"
            onClick={handleLog}
          >
            <span className="text-xl font-medium text-blue-500">
              {login ? "Logout" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
