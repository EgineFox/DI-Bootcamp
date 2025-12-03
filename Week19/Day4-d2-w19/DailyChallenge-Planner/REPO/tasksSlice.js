import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  tasksByDay: {}
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      const newTask = { id: task.id ?? Date.now(), ...task };
      state.tasksByDay[day].push(newTask);
    },
    editTask(state, action) {
      const { day, id, changes } = action.payload;
      const tasks = state.tasksByDay[day];
      if (!tasks) return;
      const index = tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        tasks[index] = { ...tasks[index], ...changes };
      }
    },
    deleteTask(state, action) {
      const { day, id } = action.payload;
      const tasks = state.tasksByDay[day];
      if (!tasks) return;
      state.tasksByDay[day] = tasks.filter(t => t.id !== id);
      if (state.tasksByDay[day].length === 0) {
        delete state.tasksByDay[day];
      }
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;


export const selectTasksByDay = createSelector(
  [(state) => state.tasks.tasksByDay, (_, day) => day],
  (tasksByDay, day) => tasksByDay[day] ?? []
);
