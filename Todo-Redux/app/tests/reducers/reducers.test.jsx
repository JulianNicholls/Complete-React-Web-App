import expect from 'expect';
import df     from 'deep-freeze-strict';

import {searchTextReducer, showCompletedReducer, tasksReducer} from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = { type: 'SET_SEARCH_TEXT', searchText: 'dog' },
          resp   = searchTextReducer(df(''), df(action));

      expect(resp).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = { type: 'TOGGLE_SHOW_COMPLETED' },
          resp   = showCompletedReducer(df(false), df(action));

      // Explicitly toggle it both ways for good measure

      expect(resp).toEqual(true);

      resp = showCompletedReducer(df(true), df(action))
      expect(resp).toEqual(false);
    });
  });

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
  });
});
