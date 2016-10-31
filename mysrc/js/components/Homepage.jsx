import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      // <div>
      //   Welcome to Roomy!
      // </div>
      <div className="jumbotron" style={{background: 'url(/images/coverphoto.jpg) center center', height: '100vh'}}>
        <div className="container">
          <h1>Welcome to Roomy</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
