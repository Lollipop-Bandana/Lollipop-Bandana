var React = require('react');

var Personality = () => (
  <form>
    <small>Choices range from 1 - 7 from Strongly Disagree to Strongly Agree</small>
    <h3>I see myself as:</h3>
    <p>1. Extraverted, enthusiastic</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>2. Critical, quarrelsome</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>3. Dependable, self-disciplined</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>4. Anxious, easily upset</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>5. Open to new experiences, complex</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>6. Reserved, quiet</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>7. Sympathetic, warm</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>8. Disorganized, careless</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>9. Calm, emotionally stable</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
    <p>10. Conventional, uncreative</p><br />
    <input type="range" min="1" max="7" value="4"/><br />
  </form>
);