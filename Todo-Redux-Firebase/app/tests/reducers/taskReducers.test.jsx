import expect from 'expect';
import df     from 'deep-freeze-strict';

import { tasksReducer } from 'reducers';

describe('Reducers', () => {
  describe('tasksReducer', () => {
    it('should add a task to the array', () => {
      let action = {
        type: 'ADD_TASK', task: {
          id:          99,
          text:        'Walk the dog',
          createdAt:   115,
          completed:   false,
          completedAt: undefined
        }
      };
      let resp   = tasksReducer(df([]), df(action));

      expect(resp.length).toBe(1);
      expect(resp[0]).toEqual(action.task);
    });

    it('should update a task', () => {
      let tasks  = [{
        id:          99,
        text:        'Walk the dog',
        createdAt:   115,
        completed:   true,
        completedAt: 1234
      }];
      let updates       = { completed: false, completedAt: null },
          toggleAction  = { type: 'UPDATE_TASK', id: tasks[0].id, updates },
          state         = tasksReducer(df(tasks), df(toggleAction));

      expect(state[0].completed).toEqual(updates.completed);
      expect(state[0].completedAt).toEqual(updates.completedAt);
      expect(state[0].text).toEqual(tasks[0].text);
    });

    it('should load tasks from an array', () => {
      let tasks  = [{
        id:          99,
        text:        'Walk the dog',
        createdAt:   115,
        completed:   false,
        completedAt: undefined
      }];

      let loadAction = { type: 'LOAD_TASKS', tasks },
          newTasks   = tasksReducer(df([]), df(loadAction));

      expect(newTasks.length).toBe(1);
      expect(newTasks).toEqual(tasks);
    })

    it('should remove a task', () => {
      let tasks  = [{
        id:          99,
        text:        'Walk the dog',
        createdAt:   115,
        completed:   false,
        completedAt: undefined
      },
      {
        id:          100,
        text:        'Walk the other dog',
        createdAt:   1154,
        completed:   true,
        completedAt: 11111
      }];

      let removeAction  = { type: 'REMOVE_TASK', id: tasks[0].id },
          state         = tasksReducer(df(tasks), df(removeAction));

      expect(state.length).toBe(1);
      expect(state[0].id).toBe(100);
    });

    it('should remove all tasks on logout', () => {
      let tasks  = [{
        id:          99,
        text:        'Walk the dog',
        createdAt:   115,
        completed:   false,
        completedAt: undefined
      },
      {
        id:          100,
        text:        'Walk the other dog',
        createdAt:   1154,
        completed:   true,
        completedAt: 11111
      }];

      let logoutAction  = { type: 'LOGOUT' },
          state         = tasksReducer(df(tasks), df(logoutAction));

      expect(state.length).toBe(0);
    })
  });
});
