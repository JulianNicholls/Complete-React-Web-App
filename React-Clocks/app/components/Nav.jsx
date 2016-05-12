var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Reactive Clocks</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
            <li><Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <p>Created by <a href="http://reallybigshoe.co.uk">Julian Nicholls</a></p>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
