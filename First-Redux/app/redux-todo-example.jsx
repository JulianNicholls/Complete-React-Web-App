var redux    = require('redux');
var moment   = require('moment');

console.log('Starting redux-todo-example');

var nextTaskID = 1;

function searchReducer(state = '', action) {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;

    default:
      return state;
  }
}

function showCompletedReducer(state = false, action) {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;

    default:
      return state;
  }
}

function tasksReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TASK':
      return [...state, {
          id:          nextTaskID++,
          text:        action.text,
          completed:   false,
          createdAt:   moment().unix(),
          completedAt: undefined
        }
      ];

    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.id);

    case 'TOGGLE_COMPLETED':
      return state;

    default:
      return state;
  }
};

var reducer = redux.combineReducers({
  searchText:      searchReducer,
  showCompleted:   showCompletedReducer,
  tasks:           tasksReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

var unsubscribe = store.subscribe(() => {
  let state = store.getState();

  console.log('sub Current State:', state);
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: 'new search text' })

store.dispatch({ type: 'TOGGLE_SHOW_COMPLETED' })
store.dispatch({ type: 'CHANGE_SEARCH_TEXT', searchText: 'newer search text' })

store.dispatch({ type: 'ADD_TASK', text: 'Mow the lawn' });
store.dispatch({ type: 'ADD_TASK', text: 'Wash the dishes' });
store.dispatch({ type: 'REMOVE_TASK', id: 1 });
