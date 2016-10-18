import React from 'react';

const ComponentOne = React.createClass({
  getInitialState: function () {
    return {
      count: this.props.count
    };
  },

  getDefaultProps: function () {
    return {
      count: 50
    };
  },

  propTypes: {
    count: React.PropTypes.number
  },

  onClick: function () {
    this.setState({
      count: this.state.count + 3
    })
  },

  render: function () {
    return (
      <div className='component'>
        <h3>Component One, using React.createClass</h3>
        <p>Current: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>Increase Count</button>
      </div>
    );
  }
});

export default ComponentOne;
