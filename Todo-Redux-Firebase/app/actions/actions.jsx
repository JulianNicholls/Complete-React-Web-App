import firebase, { firebaseRef, githubProvider } from 'app/firebase';
import moment          from 'moment';

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
    const uid      = getState().auth.uid,
          tasksRef = firebaseRef.child(`users/${uid}/tasks`);

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

    const uid     = getState().auth.uid,
          taskRef = firebaseRef.child(`users/${uid}/tasks`).push(task);

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
    const uid      = getState().auth.uid,
          taskRef  = firebaseRef.child(`users/${uid}/tasks/${id}`),
          updates  = {
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
};

export function login(uid) {
  return { type: 'LOGIN', uid };
};

export function startLogin() {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
//      console.log('Auth OK - uid: ', result.user.uid);
    }, (err) => {
      console.log('Auth Failed: ', err);
    }).catch((err) => {    // I think there is a third possibility, although I'm not sure
      throw err;
    });
  };
};

export function logout() {
  return { type: 'LOGOUT' };
};

export function startLogout() {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
//      console.log('Logged out OK');
    })
  };
};
