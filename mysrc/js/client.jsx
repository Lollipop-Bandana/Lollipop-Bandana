import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout.jsx";
import Nav from "./components/Nav.jsx";
import App from "./components/App.jsx";
import Homepage from "./components/Homepage.jsx";

const app = document.getElementById('app');
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="app" component={App}></Route>
    </Route>
  </Router>
), app);
