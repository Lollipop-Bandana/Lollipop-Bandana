var React = require('react');

class Profile extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="user-profile">
        <img src={props.user.img} />
        <div className="user-info">
        Name: {props.user.name} <br />
        Mutual Friends: {props.user.mutualFriends} <br />
        
        </div>
      </div>
    );
  }
}