import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Photo from "./pages/Photo";
import Register from "./pages/Register";
import _get from "lodash/get";
function App() {
  const isLogin = localStorage.getItem("loginSC");

  return (
    <div className="pt-20 max-w-[1200px] mx-auto ">
      <Navbar />
      <div className="pt-5">
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/feed" component={Feed} />
          <Route path="/explore" component={Explore} />
          <Route
            path="/login"
            render={() => {
              return !isLogin ? <Login /> : <Redirect to="/" />;
            }}
          />
          <Route path="/register" component={Register} />
          <Route path="/photo" component={Photo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
