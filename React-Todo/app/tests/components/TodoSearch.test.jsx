import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoSearch   from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it("should call onChange when the search text changes", () => {
    let text       = "Dog",
        spy        = expect.createSpy(),
        todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todosearch.refs.searchText.value = text;
    TestUtils.Simulate.change(todosearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, text);
  });

  it("should call onChange when show completed changes", () => {
    let spy        = expect.createSpy(),
        todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todosearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
