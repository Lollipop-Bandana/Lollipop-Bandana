import React from "react";
import SearchListEntry from "./app/SearchListEntry.jsx";
import {sortStyles, searchStyles, imageStyles} from "./app/styles.js";
import request from "browser-request";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getResults() {
    request("/api/getResults", function(err, res, body) {
      console.log(body);
    });
  }

  render() {
    this.getResults();
    return (
      <div>
        <div className="sort-container" style={sortStyles}>
          <h3>Sort By:</h3>
          <div className="location search">
            Location:
            <form className="location search">
              <input placeholder="Enter Location" />
              <input type="submit" value="Search" />
            </form>
          </div>
          <br />
          <div className="price-range">
            Price Range:
            <form className="price search">
              $<input type="number" placeholder="Minimum" /> - $<input type="number" placeholder="Maximum" />
            </form>
          </div>
          <br />
          <div className="preferences search">
            Smoker:
            <form className="smoker">
              <input type="checkbox" name="smoker" value="yes" />Yes
              <input type="checkbox" name="smoker" value="no" />No
            </form>
            <br />
            Pets:
            <form className="pets">
              <input type="checkbox" name="pets" value="yes" />Yes
              <input type="checkbox" name="pets" value="no" />No
            </form>
            <br />
            Gender:
            <form className="gender">
              <input type="checkbox" name="gender" value="Male" />Male
              <input type="checkbox" name="gender" value="Female" />Female
            </form>
          </div>
        </div>
        <SearchListEntry />
      </div>
    );
  }
};

export default App;