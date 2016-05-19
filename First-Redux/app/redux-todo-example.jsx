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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

var unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('sub Current State:', state);
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: 'new search text' })

// unsubscribe();

store.dispatch({ type: 'TOGGLE_SHOW_COMPLETED' })
store.dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: 'changed search text' })
