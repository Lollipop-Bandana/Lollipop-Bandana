var containerStyles = {
  border: 'solid 1px black',
  height: 'auto',
  width: 'auto',
  maxHeight: '30%',
  maxWidth: '30%',
  float: 'right'
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="search-container" style={containerStyles}>
        Hi
        </div>
      </div>
    );
  }
}

window.App = App;