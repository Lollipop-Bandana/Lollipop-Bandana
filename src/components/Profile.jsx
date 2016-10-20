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
          Name: {props.user.name}<br />
          Age: {props.form.age}<br />
          Gender: {props.user.sex}<br />
          About Me: {props.form.aboutMe}<br />     
        </div>
      </div>
      {props.form.additional.address} ? <Have /> : <Looking />
    );
  }
}