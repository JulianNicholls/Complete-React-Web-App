import React     from 'react';
import ReactDOM  from 'react-dom';
import expect    from 'expect';
import $         from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp   from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTask', () => {
    it('should add a task to the todos list', () => {
      let taskText = "Add a new task",
          todoapp  = TestUtils.renderIntoDocument(<TodoApp />);

      todoapp.setState({ todos: [] });
      todoapp.handleAddTask(taskText);

      expect(todoapp.state.todos.length).toBe(1);
      expect(todoapp.state.todos[0].text).toBe(taskText);
      expect(todoapp.state.todos[0].createdAt).toBeA('number')
      expect(todoapp.state.todos[0].ccompletedAt).toBeA('undefined')
    });
  });

  describe('handleToggle', () => {
    it('should toggle completion when called', () => {
      var taskData = { id: 11, text: 'test toggling', completed: false, createdAt: 16000000, completedAt: undefined },
          todoapp  = TestUtils.renderIntoDocument(<TodoApp />);

      todoapp.setState({ todos: [taskData] });

      expect(todoapp.state.todos[0].completed).toBe(false)

      todoapp.handleToggle(11);
      expect(todoapp.state.todos[0].completed).toBe(true)
      expect(todoapp.state.todos[0].completedAt).toBeA('number')
    });

    it('should remove completion date when going from completed to uncompleted', () => {
      var taskData = { id: 11, text: 'test toggling', completed: false, createdAt: 16000000, completedAt: undefined },
          todoapp  = TestUtils.renderIntoDocument(<TodoApp />);

      todoapp.setState({ todos: [taskData] });

      todoapp.handleToggle(11);
      expect(todoapp.state.todos[0].completedAt).toBeA('number')

      todoapp.handleToggle(11);
      expect(todoapp.state.todos[0].completed).toBe(false)
      expect(todoapp.state.todos[0].completedAt).toBeA('undefined')
    });
  });
});
