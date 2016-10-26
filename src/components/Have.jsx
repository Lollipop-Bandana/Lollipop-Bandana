// have room form
var Have = () => (
  <div className="have-info">Address: 
    <form className="address-form">
      <input className="address1" name="address1" required placeholder="Address 1" /><br />
      <input className="address2" name="address2" placeholder="Address 2" /><br />
      <input className="city" type="text" name="city" required placeholder="City" /><br />
      <input className="state" type="text" name="state" required placeholder="State" /><br />
      <input className="zipcode" name="zipcode" required placeholder="Zipcode" /><br />
    </form>
    <br />
    <div className="room-type">
      <div className="room dropdown">
        <button className="dropdown-toggle" type="button" dataToggle="dropdown">Room Type:
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li>Shared Room</li>
          <li>One Bedroom</li>
        </ul>
      </div>
    </div>
    <br />
    <div className="price">Price:
      <input className="room-price" required placeholder="Enter Amount"/>
    </div>
    </div>
);

window.Have = Have;