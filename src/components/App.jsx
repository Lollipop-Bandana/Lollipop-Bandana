class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Homepage />
        <Nav />
      </div>
    );
  }
}

window.App = App;