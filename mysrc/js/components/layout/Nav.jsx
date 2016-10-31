import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import request from 'browser-request';

class Nav extends React.Component {
  
  getProf() {
    return '/profile/' + (Math.random() * 100 << 0);
  }

  makeRequest() {
    $.ajax({
      url: '/api/usermatches',
      method: 'GET',
      data: {friendIds: [1, 2], looking: false},
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
    // $.ajax({
    //   url: '/api/userprofile',
    //   method: 'GET',
    //   data: {id: 12345},
    //   success: function(data) {
    //     console.log(data);
    //   },
    //   error: function(error) {
    //     console.log(error);
    //   }
    // });
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