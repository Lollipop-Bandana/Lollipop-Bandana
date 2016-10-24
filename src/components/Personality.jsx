var React = require('react');

class Personality extends React.component {
  constructor () {
    super();
  }

  // add propTypes

  render() {
    return (
      <form action="">
        <h3>I see myself as:</h3>
        <p>1. Extraverted, enthusiastic</p><br />
        <input type="radio" name="stronglydisagree" value="stronglydisagree"><label for="stronglydisagree">Strongly Disagree</label></input><br />
        <input type="radio" name="moderatelydisagree" value="moderatelydisagree"><label for="moderatelydisagree">Moderately Disagree</label></input> <br />
        <input type="radio" name="disagree" value="disagree"><label for="disagree">Disagree a Little</label></input><br />
        <input type="radio" name="neither" value="neither"><label for="neither">Neither Agree or Disagree</label></input><br />
        <input type="radio" name="agree" value="agree"><label for="agree">Agree a Little</label></input><br />
        <input type="radio" name="moderatelyagree" value="moderatelyagree"><label for="moderatelyagree">Moderately Agree</label></input><br />
        <input type="radio" name="stronglyagree" value="stronglyagree"><label for="stronglyagree">Strongly Agree</label></input><br />
      </form>
    );
  }
}