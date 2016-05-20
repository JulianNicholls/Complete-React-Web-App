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
    let tasks = [
      { id: 1, text: 'do something'},
      { id: 2, text: 'do something else'},
    ];

    let todolist  = TestUtils.renderIntoDocument(<TodoList tasks={tasks} />),
        todotasks = TestUtils.scryRenderedComponentsWithType(todolist, TodoTask);

    expect(todotasks.length).toBe(tasks.length);
  });

  it('should render a message if there are no (or no uncompleted) tasks', () => {
    let tasks     = [],
        todolist  = TestUtils.renderIntoDocument(<TodoList tasks={tasks} />),
        $el       = $(ReactDOM.findDOMNode(todolist));

    expect($el.find(".container__message").length).toBe(1);
  });
});
