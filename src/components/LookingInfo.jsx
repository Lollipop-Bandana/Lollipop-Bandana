// extension of user profile for user that is looking for a room

var LookingInfo = (props) => (
  <div className="looking-info">
    <div className="room-type">Type of Room: {props.form.additional.type}</div><br />
    <div className="room-price">Price: {props.form.additional.minimumPrice} - {props.form.additional.maximumPrice}</div>
  </div>
);

window.LookingInfo = LookingInfo;