import React from "react";
import { Link } from "react-router";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">homepage</Link>
        <Link to="app">app</Link>
      </div>
    );
  }
}

export default Nav;