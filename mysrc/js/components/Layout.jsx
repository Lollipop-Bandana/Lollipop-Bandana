import React from "react";
import Nav from "./layout/Nav.jsx";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Roomy</h1>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;