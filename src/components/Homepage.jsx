// create stateless component (make stateful later if needed)
var Homepage = ({loggedIn}) => {

  return (
    <div>
      <Nav loggedIn={loggedIn} />
      <div>
        <h2>Find a Housemate in Your Friend Network</h2>
        <p>A safer and faster way to find a housemate</p>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
};