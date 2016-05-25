import expect from 'expect';
import df     from 'deep-freeze-strict';

import { tasksReducer } from 'reducers';

describe('Reducers', () => {
  describe('tasksReducer', () => {
    it('should add a task to the array', () => {
      let action = { type: 'ADD_TASK', text: 'Walk the dog' },
          resp   = tasksReducer(df([]), df(action));

      expect(resp.length).toBe(1);
      expect(resp[0].text).toEqual(action.text);
    });

    it('should change the completed state on a task', () => {
      let addAction     = { type: 'ADD_TASK', text: 'Walk the dog' },
          tasks         = tasksReducer(df([]), df(addAction)),
          toggleAction  = { type: 'TOGGLE_TASK', id: tasks[0].id },
          state         = tasksReducer(df(tasks), df(toggleAction));

      // Explicitly toggle it both ways for good measure

      expect(state[0].completed).toBe(true);
      expect(state[0].completedAt).toExist();

      state = tasksReducer(df(state), df(toggleAction));

      expect(state[0].completed).toBe(false);
      expect(state[0].completedAt).toNotExist();
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

    it('remove a task', () => {
      let addAction     = { type: 'ADD_TASK', text: 'Walk the dog' },
          tasks         = tasksReducer(df([]), df(addAction));

      expect(tasks.length).toBe(1);

      let removeAction  = { type: 'REMOVE_TASK', id: tasks[0].id },
          state         = tasksReducer(df(tasks), df(removeAction));

      expect(state.length).toBe(0);
    });
  });
});
