import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <a href="/auth/facebook"><button>Login</button></a>
        <a href="/auth/logout"><button>Logout</button></a>
      </div>
    );
  }
}

export default Homepage;