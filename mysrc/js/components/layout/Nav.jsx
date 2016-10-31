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
    // $.ajax({
    //   url: '/api/userprofile',
    //   method: 'GET',
    //   // data: {id: 12345},
    //   success: function(data) {
    //     console.log(data);
    //   },
    //   error: function(error) {
    //     console.log(error);
    //   }
    // });
    request('/api/userprofile', function(err, res, body) {
      if (err) {
        console.log('Error during request: ', err);
      } else {
        if (body === 'false') {
          replace('/');
        }
        console.log('body: ', body);
      }
    });
  }

  render() {
    return (
      <div>
        <Link to="/" onClick={this.makeRequest}><button onClick={this.makeRequest}>Homepage</button></Link>
        <Link to="/app"><button>App</button></Link>
        <Link to={this.getProf}><button>Profile</button></Link>
        <a href="/auth/facebook"><button>Login</button></a>
        <a href="/auth/logout"><button>Logout</button></a>
      </div>
    );
  }
}

export default Nav;