import expect from 'expect';
import df     from 'deep-freeze-strict';

import {searchTextReducer, showCompletedReducer} from 'reducers';

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
});
