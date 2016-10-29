import React from "react";


class Profile extends React.Component {
  render() {
    return (
      <div>
        Profile Here for user : {this.props.params.profile}
      </div>
    );
  }
}

export default Profile;