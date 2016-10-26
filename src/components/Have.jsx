// have room form
var Have = () => (
  <div className="have-info"><h3>Address: </h3>
    <form className="address-form">
      Address 1:<br />
      <input className="address1" name="address1" required placeholder="Address 1" /><br />
      Address 2:<br />
      <input className="address2" name="address2" placeholder="Address 2" /><br />
      City:<br />
      <input className="city" type="text" name="city" required placeholder="City" /><br />
      State:<br />
      <input className="state" type="text" name="state" required placeholder="State" /><br />
      Zipcode:<br />
      <input className="zipcode" name="zipcode" required placeholder="Zipcode" /><br />
    </form>
    <br />
    <h3>Room Type:</h3>
    <select name="room-type">
      <option value="share-room">Shared Room</option>
      <option value="one-bedroom">One Bedroom</option>
    </select>
    <br /><br />
    <div className="price">
      <h3>Price:</h3>
      $<input className="room-price" type="number" required placeholder="Enter Amount"/>
    </div>
    </div>
);

window.Have = Have;