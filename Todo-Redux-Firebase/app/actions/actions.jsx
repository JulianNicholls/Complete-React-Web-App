export function setSearchText(searchText) {
  return { type: 'SET_SEARCH_TEXT', searchText };
};

export function toggleShowCompleted() {
  return { type: 'TOGGLE_SHOW_COMPLETED' };
};

export function loadTasks(tasks) {
  return { type: 'LOAD_TASKS', tasks };
};

export function addTask(text, priority) {
  return { type: 'ADD_TASK', text, priority };
};

export function toggleTask(id) {
  return { type: 'TOGGLE_TASK', id };
};

export function removeTask(id) {
  return { type: 'REMOVE_TASK', id };
};
