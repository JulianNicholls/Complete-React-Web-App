var React   = require('react');
var {Link}  = require('react-router');

var Examples = (props) =>
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few examples of locations that you can try out. Anywhere in the
      world is up for grabs, and don't worry about your spelling, we'll probably
      know where you mean!</p>

    <ol>
      <li><Link to="/?location=London">London</Link></li>
      <li><Link to="/?location=Bournemouth">Bournemouth</Link></li>
      <li><Link to="/?location=Edinburgh">Edinburgh</Link></li>
      <li><Link to="/?location=Cardiff">Cardiff</Link></li>
      <li><Link to="/?location=Belfast">Belfast</Link></li>
      <li><Link to="/?location=Paris">Paris</Link></li>
      <li><Link to="/?location=Tokyo">Tokyo</Link></li>
    </ol>
  </div>

module.exports = Examples;
