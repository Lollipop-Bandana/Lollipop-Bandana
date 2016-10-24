// create stateless component (make stateful later if needed)
var Homepage = ({loggedIn}) => {

  return (
    <div>
      <Nav loggedIn={loggedIn} />
      <div>
        <div className="banner-image" style="background-image:url('http://i.huffpost.com/gen/1294846/images/o-ROOMMATE-facebook.jpg')"></div>
        <h2>Find a New Housemate in Your Friend Network</h2>
        <p>A safer and faster way to find a housemate</p>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
};