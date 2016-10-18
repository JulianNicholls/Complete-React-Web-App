import expect from 'expect';
import df     from 'deep-freeze-strict';

import * as Reducers from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = { type: 'SET_SEARCH_TEXT', searchText: 'dog' },
          resp   = Reducers.searchTextReducer(df(''), df(action));

      expect(resp).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = { type: 'TOGGLE_SHOW_COMPLETED' },
          resp   = Reducers.showCompletedReducer(df(false), df(action));

      // Explicitly toggle it both ways for good measure

      expect(resp).toEqual(true);

      resp = Reducers.showCompletedReducer(df(true), df(action))
      expect(resp).toEqual(false);
    });
  });

  describe('authReducer', () => {
    it('should add a uid to the auth section on login', () => {
      let action = { type: 'LOGIN', uid: '12345678' },
          resp   = Reducers.authReducer(df({}), df(action));

      expect(resp).toEqual({ uid: '12345678' });
    });

    it('should remove the uid from the auth section on logout', () => {
      let action  = { type: 'LOGOUT' },
          initial = { uid: '12345678'},
          resp    = Reducers.authReducer(df(initial), df(action));

      expect(resp).toEqual({});
    });
  })
});
