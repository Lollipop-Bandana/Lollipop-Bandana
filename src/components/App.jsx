const searchStyles = {
  width: '73%',
  float: 'right',
  margin: '5px 5px'
};

const sortStyles = {
  float: 'left',
  width: '25%',
  margin: '5px 5px'
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <div className="preferences search">
            Smoker:
            <form>
              <input type="checkbox" name="smoker" value="yes" />Yes
              <input type="checkbox" name="smoker" value="no" />No
            </form>
            <br />
            Pets:
            <form>
              <input type="checkbox" name="smoker" value="yes" />Yes
              <input type="checkbox" name="smoker" value="no" />No
            </form>
            <br />
            Gender:
            <form>
              <input type="checkbox" name="smoker" value="Male" />Male
              <input type="checkbox" name="smoker" value="Female" />Female
            </form>
          </div>
        </div>
        <div className="search-container" style={searchStyles}>
          <h3>Results</h3>
        </div>
      </div>
    );
  }
};

window.App = App;