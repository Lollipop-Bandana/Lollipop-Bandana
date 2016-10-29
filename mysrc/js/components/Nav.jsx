import React from "react";
import { Link } from "react-router";

class Nav extends React.Component {
  
  getPath() {
    return "profile/" + (Math.random() * 100 << 0);
  }
  
  render() {
    return (
      <div>
        <Link to="/">homepage</Link>
        <Link to="app">app</Link>
        <Link to={this.getPath}>profile</Link>
      </div>
    );
  }
}

export default Nav;