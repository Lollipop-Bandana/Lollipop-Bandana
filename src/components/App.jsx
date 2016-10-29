import React from 'react';
import NavLink from './NavLink';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  handleSignOutClick() {
    // do some oAuth stuff
  }

  handleSignInClick() {
    // do some oAuth stuff
  }

  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Roomy</NavLink></li>
          {this.state.loggedIn ? (<li><NavLink to="/" onClick={this.handleSignOutClick}>Sign Out</NavLink></li>) :
                                 (<li><a onClick={this.handleSignInClick}>Sign In</a></li>)
                                 (<li><NavLink to="/signup">Sign Up</NavLink></li>)}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
