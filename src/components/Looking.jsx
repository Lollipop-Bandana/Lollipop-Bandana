// looking for room form
var Looking = () => (
  <div className="looking">
    <div className="price-range">
      <h3>Price Range:</h3>
      $<select name="min-price">
        <option>0</option>
        <option>500</option>
        <option>1000</option>
        <option>1500</option>
        <option>2000</option>
        <option>2500</option>
        <option>3000</option>
        <option>3500</option>
        <option>4000</option>
        <option>4500</option>
        <option>5000+</option>
      </select> - 
      $<select name="max-price">
        <option>500</option>
        <option>1000</option>
        <option>1500</option>
        <option>2000</option>
        <option>2500</option>
        <option>3000</option>
        <option>3500</option>
        <option>4000</option>
        <option>4500</option>
        <option>5000+</option>
      </select>
    </div>
    <br />
    <h3>Room Type:</h3>
    <select name="room-type">
      <option>Shared Room</option>
      <option>One Bedroom</option>
    </select>
  </div>
);

window.Looking = Looking;