import { createSlice, createSelector } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
}

const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { title, category } = action.payload;
            state.tasksList.push({
                id: nanoid(),
                title,
                category,
                isDone: false,
                progress: 0 // from 0 to 100%
            });
        },
        editTask: (state, action) => {
            const { id, title, category, isDone } = action.payload;
            state.tasksList = state.tasksList.map(task => task.id === id ?
                { ...task, title, category, isDone }
                : task
            );
        },
        removeTask: (state, action) => {
            state.tasksList = state.tasksList.filter(task => task.id !== action.payload.id);
        },
        toggleTask: (state, action) => {
            const { id } = action.payload;
            const task = state.tasksList.find(task => task.id === id);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        updateProgress: (state, action) => {
            const { id, progress } = action.payload;
            const task = state.tasksList.find(task => task.id === id);
            if (task) {
                task.progress = progress; 
            }
        }
    },
});

// selectors
export const selectTask = state => state.task.tasksList;
export const selectSelectedCategory = state => state.category.selectedCategory;

export const selectTaskByCategory = createSelector(
    [selectTask, selectSelectedCategory],
    (task, selectedCategory) => {
        if (!selectedCategory) return task;
        return task.filter(task => task.category === selectedCategory);
    }
);

export const selectCompletedTasks = createSelector(
  [selectTask],
  tasks => tasks.filter(task => task.isDone).length
);


export const { addTask, editTask, removeTask, toggleTask, updateProgress } = tasksSlice.actions;
export default tasksSlice.reducer;
