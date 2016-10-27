import React from "react";
import {loggedIn, handleSignOutClick} from "./utils";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div>roomy</div>
        <div>
          <ul>
            {loggedIn ? (<li><a href="/" onClick={() => handleSignOutClick()}>Sign Out</a></li>) :
                         (<li><a href="login">Login</a></li>)
                         (<li><a href="signup">Signup</a></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  handleSignOutClick: React.PropTypes.func.isRequired
};

export default Nav;