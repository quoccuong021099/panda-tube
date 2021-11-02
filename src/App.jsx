import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Photo from "./pages/Photo";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="pt-20 max-w-[1200px] mx-auto">
      <Navbar />
      <div className="pt-5">
        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/feed" component={Feed} />
          <Route path="/explore" component={Explore} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/photo" component={Photo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
