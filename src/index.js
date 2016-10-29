import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Homepage from './components/Homepage';
// import additional routes here
import SignUp from './components/SignUp';
import MainApp from './components/MainApp';
import Profile from './components/Profile';
import Notfound from './components/NotFound';

render((
  <Router history="browserHistory">
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      {/* add additional routes here */}
      <Route path="/signup" component={SignUp}/>
      <Route path="/mainapp" component={MainApp}/>
      <Route path="/profile" component={Profile}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('app'));
