import React from 'react';

class Personality extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1,
      num9: 1,
      num10: 1
    }
  }

  onSlideChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form>
        <h2>Please take this short quiz</h2>
        <h3>I see myself as:</h3>
        Choices range from 1 - 7 from Strongly Disagree to Strongly Agree
        <p>1. Extraverted, enthusiastic</p><br />
        <input name="num1" type="range" min="1" max="7" step="1" value={this.state.num1} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num1}</span>
        <br />
        <p>2. Critical, quarrelsome</p><br />
        <input name="num2" type="range" min="1" max="7" step="1" value={this.state.num2} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num2}</span>
        <br />
        <p>3. Dependable, self-disciplined</p><br />
        <input name="num3" type="range" min="1" max="7" step="1" value={this.state.num3} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num3}</span>
        <br />
        <p>4. Anxious, easily upset</p><br />
        <input name="num4" type="range" min="1" max="7" step="1" value={this.state.num4} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num4}</span>
        <br />
        <p>5. Open to new experiences, complex</p><br />
        <input name="num5" type="range" min="1" max="7" step="1" value={this.state.num5} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num5}</span>
        <br />
        <p>6. Reserved, quiet</p><br />
        <input name="num6" type="range" min="1" max="7" step="1" value={this.state.num6} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num6}</span>
        <br />
        <p>7. Sympathetic, warm</p><br />
        <input name="num7" type="range" min="1" max="7" step="1" value={this.state.num7} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num7}</span>
        <br />
        <p>8. Disorganized, careless</p><br />
        <input name="num8" type="range" min="1" max="7" step="1" value={this.state.num8} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num8}</span>
        <br />
        <p>9. Calm, emotionally stable</p><br />
        <input name="num9" type="range" min="1" max="7" step="1" value={this.state.num9} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num9}</span>
        <br />
        <p>10. Conventional, uncreative</p><br />
        <input name="num10" type="range" min="1" max="7" step="1" value={this.state.num10} onInput={this.onSlideChange.bind(this)} onChange={this.onSlideChange.bind(this)} />
        <span>{this.state.num10}</span>
        <br />
      </form>
    );
  }
};

export default Personality;
