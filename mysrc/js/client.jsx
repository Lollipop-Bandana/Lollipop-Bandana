import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./components/Layout.jsx";
import App from "./components/App.jsx";
import Homepage from "./components/Homepage.jsx";
import Profile from "./components/Profile.jsx";
import NotFound from "./components/NotFound.jsx";

const app = document.getElementById('app');
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="app" component={App}></Route>
      <Route path="profile/:profile" component={Profile}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
), app);
