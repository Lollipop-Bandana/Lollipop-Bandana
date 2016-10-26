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
      <select>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
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