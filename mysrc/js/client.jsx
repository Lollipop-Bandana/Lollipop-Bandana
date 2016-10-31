import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import request from "browser-request";

import Layout from "./components/Layout.jsx";
import App from "./components/App.jsx";
import Homepage from "./components/Homepage.jsx";
import Profile from "./components/Profile.jsx";
import NotFound from "./components/NotFound.jsx";
import BaseForm from "./components/BaseForm.jsx";
import Have from "./components/baseform/Have.jsx";
import Looking from "./components/baseform/Looking.jsx";

const app = document.getElementById('app');

const checkLogged = function(nextState, replace, callback) {
  //var homepage = window.location.protocol + '//' + window.location.host;
  request('/status', function(err, res, body) {
    if (err) {
      callback(err);
    } else {
      if (body === 'false') {
        replace("/");
      }
      callback(body)
    }
  });
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homepage}></IndexRoute>
      <Route path="app" component={App} onEnter={checkLogged}></Route>
      <Route path="profile/:profile" component={Profile}></Route>
      <Route path="signup" component={BaseForm}>
        <Route path="/have" component={Have}></Route>
        <Route path="/looking" component={Looking}></Route>
      </Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
), app);
