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

export function startLoadTasks() {
  return (dispatch, getState) => {
    const tasksRef = firebaseRef.child('tasks');

    return tasksRef.once('value').then((snapshot) => {
      var tasks       = snapshot.val() || {},
          parsedTasks = [];

      Object.keys(tasks).forEach((taskId) => {
        parsedTasks.push({
          id: taskId,
          ...tasks[taskId]
        });
      });

      dispatch(loadTasks(parsedTasks));
    });
  };
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

export function updateTask(id, updates) {
  return { type: 'UPDATE_TASK', id, updates };
};

export function startToggleTask(id, completed) {
  return (dispatch, getState) => {
    const taskRef = firebaseRef.child(`tasks/${id}`),
          updates = {
            completed,
            completedAt: completed ? moment().unix() : null
          };

    return taskRef.update(updates).then(() => {
      dispatch(updateTask(id, updates));
    });
  };
};

export function removeTask(id) {
  return { type: 'REMOVE_TASK', id };
};

export function startRemoveTask(id) {
  return (dispatch, getState) => {
    const taskRef = firebaseRef.child(`tasks/${id}`);

    return taskRef.remove().then(() => {
      dispatch(removeTask(id));
    }, (err) => {
      console.error('Remove failed:', err);
    });
  };
}
