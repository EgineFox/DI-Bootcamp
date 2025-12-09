import { SET_SELECTED_DATE, ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK_DONE } from "./actionTypes";

const initialState = {
    selectedDate: new Date().toISOString().slice(0, 10), // today Date str
    tasksByDay: {} // object: key = date, value = array of tasks 
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_DATE:
            return { ...state, selectedDate: action.payload };

        case ADD_TASK: {
            const { dateStr, task } = action.payload;
            const prevTasks = state.tasksByDay[dateStr] || [];
            return {
                ...state,
                tasksByDay: {
                    ...state.tasksByDay,
                    [dateStr]: [...prevTasks, task]
                }
            };
        }

        case EDIT_TASK: {
            const { dateStr, taskId, updates } = action.payload;
            const prevTasks = state.tasksByDay[dateStr] || [];
            const nextTask = prevTasks.map( t=> t.id === taskId ? { ...t, ...updates} : t );
            return {
                ...state,
                tasksByDay: {
                    ...state.tasksByDay,
                    [dateStr]: nextTask
                }
            };
        }

        case DELETE_TASK: {
            const { dateStr, taskId } = action.payload;
            const prevTasks = state.tasksByDay[dateStr] || [];
            const nextTask = prevTasks.filter( t=> t.id !== taskId);
            return {
                ...state,
                tasksByDay: {
                    ...state.tasksByDay,
                    [dateStr]: nextTask
                }                    
            };
        }

         case TOGGLE_TASK_DONE: {
      const { dateStr, taskId } = action.payload;
      const prevTasks = state.tasksByDay[dateStr] || [];
      const nextTasks = prevTasks.map(t =>
        t.id === taskId ? { ...t, done: !t.done } : t
      );
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [dateStr]: nextTasks
        }
      };
    }

    default:
      return state;
    }
}

export default rootReducer;
