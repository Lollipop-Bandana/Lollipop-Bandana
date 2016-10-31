import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import request from 'browser-request';

class Nav extends React.Component {

  getPath() {
    return "/profile/" + (Math.random() * 100 << 0);
  }

  render() {
    return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/app">App</Link></li>
            <li><Link to={this.getPath}>Profile</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/auth/login">Login</a></li>
          <li><a href="/auth/logout">Logout</a></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Nav;
