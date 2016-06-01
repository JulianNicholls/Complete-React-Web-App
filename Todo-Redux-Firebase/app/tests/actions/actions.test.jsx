import expect              from 'expect';
import configureMockStore  from 'redux-mock-store';
import thunk               from 'redux-thunk';

import { setSearchText, toggleShowCompleted, loadTasks, startAddTask, addTask, toggleTask, removeTask } from 'actions';

const createMockStore = configureMockStore([thunk]);

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
    let action = {
      type: 'ADD_TASK', task: {
        id:          99,
        text:        'Walk the dog',
        createdAt:   115,
        completed:   false,
        completedAt: undefined
      }
    };
    let resp   = addTask(action.task);

    expect(resp).toEqual(action);
  });

  it('should create task and dispatch ADD_TASK', (done) => {
    const store    = createMockStore({}),
          taskText = 'Walk the dog';

    store.dispatch(startAddTask(taskText, 3)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({ type: 'ADD_TASK' });
      expect(actions[0].task).toInclude({ text: taskText });

      done();
    }).catch(done);
  });

  it('should generate toggle task action', () => {
    let id     = 753,
        action = { type: 'TOGGLE_TASK', id },
        resp   = toggleTask(id);

    expect(resp).toEqual(action);
  });

  it('should generate remove task action', () => {
    let id     = 753,
        action = { type: 'REMOVE_TASK', id },
        resp   = removeTask(id);

    expect(resp).toEqual(action);
  });
});
