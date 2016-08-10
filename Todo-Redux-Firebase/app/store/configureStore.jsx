import { combineReducers, createStore, compose, applyMiddleware }  from 'redux'
import thunk         from 'redux-thunk'

import * as Reducers from 'reducers';

export function configure(initialState = {}) {
  var reducer = combineReducers({
    searchText:     Reducers.searchTextReducer,
    showCompleted:  Reducers.showCompletedReducer,
    tasks:          Reducers.tasksReducer,
    auth:           Reducers.authReducer
  });

  var store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));

  return store;
};
