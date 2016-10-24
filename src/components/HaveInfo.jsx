// extension of user profile for user that has a room

var React = require('react');

var HaveInfo = (props) => (
  <div className="have-info">
    <div className="address">Address: {props.form.additional.address}</div><br />
    <div className="room-type">Type of Room: {props.form.additional.type}</div><br />
    <div className="room-price">Price: {props.form.additional.price}</div>
  </div>
);