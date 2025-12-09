import { SET_SELECTED_DATE, ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK_DONE } from './actionTypes';

//action creators
// choose date
export const setSelectedDate = (dateStr) => ({
    type: SET_SELECTED_DATE,
    payload:  dateStr 
});

// add task
export const addTask = (dateStr, task ) => ({
    type: ADD_TASK,
    payload: { dateStr, task}
});

// edit task
export const editTask = (dateStr, taskId, updates) => ({
    type: EDIT_TASK,
    payload: { dateStr, taskId, updates}
});

//daelete task
export const deleteTask = ( dateStr, taskId ) => ( {
    type: DELETE_TASK,
    payload: { dateStr, taskId }
});

// toggle task
export const toggleTaskDone = ( dateStr, taskId ) => ({
    type: TOGGLE_TASK_DONE,
    payload: { dateStr, taskId}
});