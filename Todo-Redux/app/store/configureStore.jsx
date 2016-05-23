import {combineReducers, createStore, compose}                 from 'redux';
import {searchTextReducer, showCompletedReducer, tasksReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = combineReducers({
    searchText:     searchTextReducer,
    showCompleted:  showCompletedReducer,
    tasks:          tasksReducer
  });

  var store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));

  return store;
};
