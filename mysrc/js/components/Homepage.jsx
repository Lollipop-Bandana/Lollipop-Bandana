import React from "react";
import Nav from "./Nav";
import {loggedIn, handleSignOutClick} from "./utils";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Nav loggedIn={loggedIn, handleSignOutClick} />
        <div>
          <div className="banner-image" style="background-image:url('http://i.huffpost.com/gen/1294846/images/o-ROOMMATE-facebook.jpg')"></div>
          <h2>Find a New Housemate in Your Friend Network</h2>
          <p>A safer and faster way to find a housemate</p>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
};
export default Homepage;