
export function searchTextReducer(state = '', action) {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;

    default:
      return state;
  }
};

export function showCompletedReducer(state = false, action) {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;

    default:
      return state;
  }
};

export function tasksReducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_TASKS':
      return [...state, ...action.tasks];

    case 'ADD_TASK':
      return [...state, action.task];

    case 'TOGGLE_TASK':
      return state.map((task) => {
        if(task.id === action.id) {
          return { ...task,
            completed:   !task.completed,
            completedAt: task.completed ? undefined : moment().unix()
          }
        }

        return task;
      });

      case 'REMOVE_TASK':
        return state.filter((task) => task.id !== action.id)

    default:
      return state;
  }
};
