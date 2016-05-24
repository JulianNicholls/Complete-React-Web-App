import expect from 'expect';

import { setSearchText, toggleShowCompleted, loadTasks, addTask, toggleTask } from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    let searchText = 'dog',
        action     = { type: 'SET_SEARCH_TEXT', searchText },
        resp       = setSearchText(searchText);

    expect(resp).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    let action = { type: 'TOGGLE_SHOW_COMPLETED' },
        resp   = toggleShowCompleted();

    expect(resp).toEqual(action);
  });

  it('should generate load tasks action', () => {
    let tasks  = [{
      id:          99,
      text:        'Walk the dog',
      createdAt:   115,
      completed:   false,
      completedAt: undefined
    }];

    let action = { type: 'LOAD_TASKS', tasks },
        resp   = loadTasks(tasks);

    expect(resp).toEqual(action);
  });

  it('should generate add task action', () => {
    let action = { type: 'ADD_TASK', text: 'Walk the dog' },
        resp   = addTask('Walk the dog');

    expect(resp).toEqual(action);
  });

  it('should generate toggle task action', () => {
    let id     = 753,
        action = { type: 'TOGGLE_TASK', id },
        resp   = toggleTask(id);

    expect(resp).toEqual(action);
  });
});
