var redux = require('redux');
var moment = require('moment');

console.log('Starting redux-todo-example');

const baseState = {
  searchText:     '',
  showCompleted:  false,
  tasks:          []
};

var nextTaskID = 1;

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

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, {
            id:          nextTaskID++,
            text:        action.text,
            completed:   false,
            createdAt:   moment().unix(),
            completedAt: undefined
          }
        ]
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
store.dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: 'newer search text' })

store.dispatch({ type: 'ADD_TASK', text: 'Mow the lawn' });
