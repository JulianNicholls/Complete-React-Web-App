import React        from 'react';
import { Provider } from 'react-redux';

import expect       from 'expect';
import TestUtils    from 'react-addons-test-utils';

import { configure } from 'configureStore';

import { TodoApp }  from 'TodoApp';
import TodoList     from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    let store    = configure(),
        provider = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <TodoApp />
          </Provider>
        ),
        todoapp  = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0],
        todolist = TestUtils.scryRenderedComponentsWithType(todoapp, TodoList);

    expect(todolist.length).toEqual(1);
  });
});
