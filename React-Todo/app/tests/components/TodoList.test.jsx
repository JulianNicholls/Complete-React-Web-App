import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList  from 'TodoList';
import TodoTask from 'TodoTask';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render the correct number of tasks', () => {
    let todos = [
      { id: 1, text: 'do something'},
      { id: 2, text: 'do something else'},
    ];

    let todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />),
        tasks    = TestUtils.scryRenderedComponentsWithType(todolist, TodoTask);

    expect(tasks.length).toBe(todos.length);
  });

  it('should render a message if there are no (or no uncompleted) tasks', () => {
    let todos     = [],
        todolist  = TestUtils.renderIntoDocument(<TodoList todos={todos} />),
        $el       = $(ReactDOM.findDOMNode(todolist));

    expect($el.find(".container__message").length).toBe(1);
  });
});
