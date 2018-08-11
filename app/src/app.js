import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "../router/AppRouter";
import "../assets/styles/global.scss";
import "../assets/styles/home.scss";
import "../assets/styles/two_column.scss";
import "../assets/styles/portfolio.scss";
import "../assets/styles/contact.scss";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppRouter/>, document.getElementById("app"));
registerServiceWorker();
