var React = require('react');

var BaseForm = () => (
  <div className="base-form">
    <input type="text" className="first-name" required placeholder="First Name" />
    <input type="text" className="last-name" required placeholder="Last Name" />
    <br />
    Birthdate:
    <select name="Month">
      <option value="January">January</option>
      <option value="February">February</option>
      <option value="March">March</option>
      <option value="April">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="October">October</option>
      <option value="November">November</option>
      <option value="December">December</option>
    </select>
    <select name="Day">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <select name="Year">
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
    </select>
  </div> 
);