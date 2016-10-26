class Profile extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="user-profile">
        <img src={props.user.img} />
        <div className="user-info">
          First Name: {props.user.firstName}<br />
          Last Name: {props.user.lastName}<br />
          Age: {props.form.age}<br />
          Gender: {props.user.sex}<br />
          About Me: {props.form.aboutMe}<br />     
        </div>
      </div>
      {props.form.additional.address} ? <HaveInfo /> : <LookingInfo />
    );
  }
};

window.Profile = Profile;