var redux = require('redux');

console.log('Starting redux todo example');

const baseState = {
  searchText:     '',
  showCompleted:  false,
  tasks:          []
};

function reducer(state = baseState, action) {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };

    case 'TOGGLE_SHOW_COMPLETED':
      return {
        ...state,
        showCompleted: !state.showCompleted
      }

    default:
      console.info('Unrecognised action', action.type);
      return state;
  }
};

var store = redux.createStore(reducer);

console.log('Current State:', store.getState());

store.dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: 'new search text' })
console.log('Current State:', store.getState());

store.dispatch({ type: 'TOGGLE_SHOW_COMPLETED' })
console.log('Current State:', store.getState());
