var redux = require('redux');

console.log('Starting redux todo example');

const baseState = {
  searchText:     '',
  showCompleted:  false,
  tasks:          []
};

function reducer(state = baseState, action) {

  return state;
};

var store = redux.createStore(reducer);

var current = store.getState();

console.log('Current State:', current);
