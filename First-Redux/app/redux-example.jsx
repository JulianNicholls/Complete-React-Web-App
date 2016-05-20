var redux = require('redux');

console.log('Starting redux example');

// Name reducer and action generator

var nameReducer = (state = 'anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;

    default:         // THIS IS NOW VITAL, SINCE ALL REDUCERS ARE CALLED FOR ALL ACTIONS
      return state;
  }
};

var changeName = (name) => {
  return { type: 'CHANGE_NAME', name };
};

// Hobbies reducer and function generators

var nextHobbyId = 1;

var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [...state, { id: nextHobbyId++, hobby: action.hobby }]

    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);

    default:
      return state;
  }
};

var addHobby = (hobby) => {
  return { type: 'ADD_HOBBY', hobby };
};

var removeHobby = (id) => {
  return { type: 'REMOVE_HOBBY', id };
};

// Movies reducer and function generators

var nextMovieId = 1;

var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [...state, {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];

    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);

    default:
      return state;
  }
};

var addMovie = (title, genre) => {
  return { type: 'ADD_MOVIE', title, genre };
};

var removeMovie = (id) => {
  return { type: 'REMOVE_MOVIE', id };
};

var reducer = redux.combineReducers({
  name:     nameReducer,
  hobbies:  hobbiesReducer,
  movies:   moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Mad Max', 'Action'));
store.dispatch(addMovie('Ghostbusters', 'Comedy'));
store.dispatch(removeMovie(1));
