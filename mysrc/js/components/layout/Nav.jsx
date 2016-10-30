import React from "react";
import { Link } from "react-router";

class Nav extends React.Component {
  
  getPath() {
    return "profile/" + (Math.random() * 100 << 0);
  }
  
  render() {
    return (
      <div>
        <Link to="/"><button>Homepage</button></Link>
        <Link to="app"><button>App</button></Link>
        <Link to={this.getPath}><button>Profile</button></Link>
        <a href="/auth/facebook"><button>Login</button></a>
        <a href="/auth/logout"><button>Logout</button></a>
      </div>
    );
  }
}

export default Nav;