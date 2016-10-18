import React, { Component }    from 'react';
import { connect }             from 'react-redux';

import * as actions            from 'actions';

export class TodoSearch extends Component {
  render() {
    const { showCompleted, searchText } = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search tasks"
                 value={searchText}
                 onChange={() => this.props.setSearchText(this.refs.searchText.value)} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted}
                   onChange={() => this.props.toggleShowCompleted()} />
            Show completed tasks
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showCompleted: state.showCompleted,
    searchText:    state.searchText
  };
}

export default connect(mapStateToProps, actions)(TodoSearch);
