import {combineReducers, createStore, compose} from 'redux';

import {searchTextReducer, showCompletedReducer, tasksReducer} from 'reducers';

export var configure = () => {
  var reducer = combineReducers({
    searchText:     searchTextReducer,
    showCompleted:  showCompletedReducer,
    tasks:          tasksReducer
  });

  var store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
