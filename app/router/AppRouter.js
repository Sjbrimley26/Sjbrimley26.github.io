import React from "react";
import { HashRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Fake from "../components/Fake";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const AppRouter = () => {
  return (
    <HashRouter>
      <div className="fullscreen">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/survey" exact component={Fake} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
