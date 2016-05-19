// I didn't follow along with the examples in here, just in redux-todo-example

var redux = require('redux');

console.log('Starting redux example');

function reducer(state = { name: 'anonymous' }, action) {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      }

    default:         // No recognised action
      console.info('Unrecognised action', action.type);
      return state;
  }

// No recognised actions

  return state;
};

var store = redux.createStore(reducer);

console.log('Current State:', store.getState());

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};

store.dispatch(action);

console.log('Current State:', store.getState());
