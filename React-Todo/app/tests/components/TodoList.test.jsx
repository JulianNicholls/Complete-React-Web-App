import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList  from 'TodoList';
import TodoEntry from 'TodoEntry';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render the correct number of entries', () => {
    let todos = [
      { id: 1, text: 'do something'},
      { id: 2, text: 'do something else'},
    ];

    let todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />),
        entries  = TestUtils.scryRenderedComponentsWithType(todolist, TodoEntry);

    expect(entries.length).toBe(todos.length);
  });
});
