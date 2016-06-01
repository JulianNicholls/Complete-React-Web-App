import { combineReducers, createStore, compose, applyMiddleware }  from 'redux'
import thunk                                      from 'redux-thunk'

import { searchTextReducer, showCompletedReducer, tasksReducer } from 'reducers';

export function configure(initialState = {}) {
  var reducer = combineReducers({
    searchText:     searchTextReducer,
    showCompleted:  showCompletedReducer,
    tasks:          tasksReducer
  });

  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));

  return store;
};
