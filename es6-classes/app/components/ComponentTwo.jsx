import React, { Component } from 'React';

const isAdmin = true;

const adminComponent = (Component) => {
  return class Admin extends Component {
    render() {
      if (isAdmin) {
        return (
          <div className="callout secondary">
            <p className="alert label">Private admin information</p>
            <Component {...this.props}/>
          </div>
        );
      }
      else {
        return null;
      }
    }
  };
};

class ComponentTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.count
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className='component'>
        <h3>Component Two, using React.Component</h3>
        <p>Current: {this.state.count}</p>
        <button className="button" onClick={this.onClick}>Increase Count by 1</button>
        <button className="button" onClick={() => {
          this.setState({
            count: this.state.count + 2
          });
        }}>Increase Count by 2</button>
      </div>
    );
  }
}

ComponentTwo.defaultProps = {
  count: 50
};

ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);
