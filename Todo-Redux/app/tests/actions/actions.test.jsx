import expect from 'expect';

import {setSearchText, toggleShowCompleted, addTask, toggleTask} from 'actions';

describe('Actions', () => {
  it('should generate search text action', () => {
    let action = { type: 'SET_SEARCH_TEXT', searchText: 'dog' },
        resp   = setSearchText('dog');

    expect(resp).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    let action = { type: 'TOGGLE_SHOW_COMPLETED' },
        resp   = toggleShowCompleted();

    expect(resp).toEqual(action);
  });

  it('should generate add task action', () => {
    let action = { type: 'ADD_TASK', text: 'Walk the dog' },
        resp   = addTask('Walk the dog');

    expect(resp).toEqual(action);
  });

  it('should generate toggle task action', () => {
    let action = { type: 'TOGGLE_TASK', id: 753 },
        resp   = toggleTask(753);

    expect(resp).toEqual(action);
  });
});
