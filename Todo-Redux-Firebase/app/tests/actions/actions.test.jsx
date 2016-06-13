import expect              from 'expect';
import configureMockStore  from 'redux-mock-store';
import thunk               from 'redux-thunk';

import * as actions        from 'actions';

import firebase, { firebaseRef } from 'app/firebase';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    let searchText = 'dog',
        action     = { type: 'SET_SEARCH_TEXT', searchText },
        resp       = actions.setSearchText(searchText);

    expect(resp).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    let action = { type: 'TOGGLE_SHOW_COMPLETED' },
        resp   = actions.toggleShowCompleted();

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
        resp   = actions.loadTasks(tasks);

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
    let resp   = actions.addTask(action.task);

    expect(resp).toEqual(action);
  });

  it('should create task and dispatch ADD_TASK', (done) => {
    const store    = createMockStore({}),
          taskText = 'Walk the dog';

    store.dispatch(actions.startAddTask(taskText, 3)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({ type: 'ADD_TASK' });
      expect(actions[0].task).toInclude({ text: taskText });

      done();
    }).catch(done);
  });

  it('should generate update task action', () => {
    let id     = 753,
        action = { type: 'UPDATE_TASK', id, updates: { completed: true } },
        resp   = actions.updateTask(id, action.updates);

    expect(resp).toEqual(action);
  });

  it('should generate remove task action', () => {
    let id     = 753,
        action = { type: 'REMOVE_TASK', id },
        resp   = actions.removeTask(id);

    expect(resp).toEqual(action);
  });

  describe('Tests with Firebase tasks', () => {
    var testTaskRef;

    beforeEach((done) => {
      testTaskRef = firebaseRef.child('tasks').push();

      testTaskRef.set({
        text:      'Walk the dog',
        completed: false,
        priority:  3,
        createdAt: 12345
      }).then(() => done());
    });

    afterEach((done) => {
      testTaskRef.remove().then(() => done());
    });

    it('should toggle task and generate UPDATE_TASK action', (done) => {
      const store  = createMockStore({}),
            action = actions.startToggleTask(testTaskRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({ type: 'UPDATE_TASK', id: testTaskRef.key });
        expect(mockActions[0].updates).toInclude({ completed: true });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should remove task and generate REMOVE_TASK action', (done) => {
      const store  = createMockStore({}),
            action = actions.startRemoveTask(testTaskRef.key);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toEqual({ type: 'REMOVE_TASK', id: testTaskRef.key });

        done();
      }, done);
    });
  });
});
