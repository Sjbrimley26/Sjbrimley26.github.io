import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
