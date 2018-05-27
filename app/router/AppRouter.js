import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Fake from "../components/Fake";

const AppRouter = () => {
  return (
    <HashRouter>
      <div className="fullscreen">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/2" exact component={Fake} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
