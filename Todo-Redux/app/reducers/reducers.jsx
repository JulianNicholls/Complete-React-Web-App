import UUID   from 'node-uuid';
import moment from 'moment';

export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;

    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;

    default:
      return state;
  }
};

export var tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_TASKS':
      return [...state, ...action.tasks];

    case 'ADD_TASK':
      return [...state, {
          id:           UUID(),
          text:         action.text,
          completed:    false,
          createdAt:    moment().unix(),
          completedAt:  undefined
        }
      ];

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

    default:
      return state;
  }
};
