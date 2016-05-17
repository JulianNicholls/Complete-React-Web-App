import React from 'react';

var TodoSearch = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search tasks" onChange={this.onChange} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.onChange} />
            Show completed tasks
          </label>
        </div>
      </div>
    );
  },
  onChange: function () {
    let showCompleted = this.refs.showCompleted.checked,
        searchText    = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }
});
module.exports = TodoSearch;
