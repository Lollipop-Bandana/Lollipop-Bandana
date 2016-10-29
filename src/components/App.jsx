// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <Homepage />
//         <Nav />
//       </div>
//     );
//   }
// }

// window.App = App;

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
        <BaseForm />
      </div>
    );
  }
}

export default App;
