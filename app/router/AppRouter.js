import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import Fake from "../components/Fake";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/#/2" exact component={Fake} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
