import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "../router/AppRouter";

ReactDOM.render(<AppRouter/>, document.getElementById("app"));
