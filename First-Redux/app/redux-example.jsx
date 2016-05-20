var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store   = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  }
  else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a target="_blank" href="' + state.map.url + '">View your Location</a>';
  }
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Ghostbusters', 'Comedy'));
store.dispatch(actions.removeMovie(1));
