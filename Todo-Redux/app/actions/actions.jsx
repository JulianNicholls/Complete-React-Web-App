export var setSearchText = (searchText) => {
  return { type: 'SET_SEARCH_TEXT', searchText };
};

export var toggleShowCompleted = () => {
  return { type: 'TOGGLE_SHOW_COMPLETED' };
};

export var addTask = (text) => {
  return { type: 'ADD_TASK', text };
};

export var toggleTask = (id) => {
  return { type: 'TOGGLE_TASK', id };
};
