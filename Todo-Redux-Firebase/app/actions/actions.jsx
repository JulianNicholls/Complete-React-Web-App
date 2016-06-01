import firebase, { firebaseRef } from 'app/firebase';
import moment                    from 'moment';

export function setSearchText(searchText) {
  return { type: 'SET_SEARCH_TEXT', searchText };
};

export function toggleShowCompleted() {
  return { type: 'TOGGLE_SHOW_COMPLETED' };
};

export function loadTasks(tasks) {
  return { type: 'LOAD_TASKS', tasks };
};

export function addTask(task) {
  return { type: 'ADD_TASK', task };
};

export function startAddTask(text, priority) {
  return (dispatch, getState) => {
    const task = {
      text,
      completed:    false,
      createdAt:    moment().unix(),
      completedAt:  null,
      priority
    };

    const taskRef = firebaseRef.child('tasks').push(task);

    return taskRef.then(() => {
      dispatch(addTask({
        ...task,
        id: taskRef.key
      }));
    });
  };
};

export function toggleTask(id) {
  return { type: 'TOGGLE_TASK', id };
};

export function removeTask(id) {
  return { type: 'REMOVE_TASK', id };
};
