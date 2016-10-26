// looking for room form
var Looking = () => (
  <div className="looking-info">
    <div className="price-range">Price Range: 
      <div className="minimum dropdown">
        <button className="dropdown-toggle" type="button" dataToggle="dropdown">Minimum ($)
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li>0</li>
          <li>500</li>
          <li>1000</li>
          <li>1500</li>
          <li>2000</li>
          <li>2500</li>
          <li>3000</li>
          <li>3500</li>
          <li>4000</li>
          <li>4500</li>
          <li>5000+</li>
        </ul>
      </div>
      <div className="maximum dropdown">
        <button className="dropdown-toggle" type="button" dataToggle="dropdown">Maximum ($)
        <span className="caret"></span></button>
        <ul className="dropdown-menu">
          <li>500</li>
          <li>1000</li>
          <li>1500</li>
          <li>2000</li>
          <li>2500</li>
          <li>3000</li>
          <li>3500</li>
          <li>4000</li>
          <li>4500</li>
          <li>5000+</li>
        </ul>
      </div>
    </div>
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
  </div> 
);

window.Looking = Looking;