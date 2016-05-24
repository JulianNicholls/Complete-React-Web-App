import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it("should dispatch setSearchText when the search text changes", () => {
    let searchText = "Dog",
        action     = { type: 'SET_SEARCH_TEXT', searchText },
        spy        = expect.createSpy(),
        tasksearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    tasksearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(tasksearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it("should dispatch toggleShowCompleted when show completed changes", () => {
    let spy        = expect.createSpy(),
        action     = { type: 'TOGGLE_SHOW_COMPLETED' },
        tasksearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    tasksearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(tasksearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
