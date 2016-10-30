import React from "react";
import {sortStyles, searchStyles, imageStyles} from "./styles.js";

class SearchListEntry extends React.Component {
  render() {
    return (
      <div className="search-container" style={searchStyles}>
        <h3>Results</h3>
        <div style={{width: '90%', margin: '0 auto', border: 'solid 1px black'}}>
          <img style={imageStyles} src="http://www.freeiconspng.com/uploads/male-icon-4.jpg" />
          <p className="user-info" style={{float: 'right'}}>
            Name: Bob<br />
            Compatibility: 80%
          </p>
        </div>
      </div>
    );
  }
}

export default SearchListEntry;