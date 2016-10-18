import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';

import expect       from 'expect';
import $            from 'jQuery';
import TestUtils    from 'react-addons-test-utils';

import { configure } from 'configureStore';

import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodoTask, { TodoTask } from 'TodoTask';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render the correct number of tasks', () => {
    let tasks = [
      {
        id:          1,
        text:        'do something',
        createdAt:   500,
        completed:   false,
        completedAt: undefined
      },
      {
        id:          2,
        text:        'do something else',
        createdAt:   500,
        completed:   false,
        completedAt: undefined
      }
    ];

    let store = configure({
          tasks
        }),
        provider  = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ConnectedTodoList />
          </Provider>
        ),
        todolist  = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0],
        todotasks = TestUtils.scryRenderedComponentsWithType(todolist, ConnectedTodoTask);

    expect(todotasks.length).toBe(tasks.length);
  });

  it('should render a message if there are no matching tasks', () => {
    let tasks     = [],
        todolist  = TestUtils.renderIntoDocument(<TodoList tasks={tasks} searchText="" />),
        $el       = $(ReactDOM.findDOMNode(todolist));

    expect($el.find(".container__message").length).toBe(1);
  });
});
