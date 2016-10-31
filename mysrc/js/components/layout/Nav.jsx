import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import request from 'browser-request';

class Nav extends React.Component {
  
  getProf() {
    return '/profile/' + (Math.random() * 100 << 0);
  }

  makeRequest() {
    console.log('here');
  }

  render() {
    return (
      <div>
        <Link to="/"><button onClick={this.makeRequest.bind(this)}>Homepage</button></Link>
        <Link to="/app"><button>App</button></Link>
        <Link to={this.getProf}><button>Profile</button></Link>
        <a href="/auth/facebook"><button>Login</button></a>
        <a href="/auth/logout"><button>Logout</button></a>
      </div>
    );
  }
}

export default Nav;