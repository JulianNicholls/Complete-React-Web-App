var redux = require('redux');

console.log('Starting redux example');

function reducer(state = { name: 'anonymous' }, action) {
  return state;
};

var store = redux.createStore(reducer);

var current = store.getState();

console.log('Current State:', current);
