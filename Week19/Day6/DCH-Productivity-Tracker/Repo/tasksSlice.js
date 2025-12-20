import { createSlice, createSelector } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
};

const tasksSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { title, category } = action.payload;
            state.tasksList.push({
                id: nanoid(),
                title,
                category,
                isDone: false,
                progress: 0,
            });
        },
        editTask: (state, action) => {
            const { id, title, category, isDone } = action.payload;
            state.tasksList = state.tasksList.map((task) =>
                task.id === id ? { ...task, title, category, isDone } : task
            );
        },
        removeTask: (state, action) => {
            state.tasksList = state.tasksList.filter(
                (task) => task.id !== action.payload.id
            );
        },
        toggleTask: (state, action) => {
            const { id } = action.payload;
            const task = state.tasksList.find((task) => task.id === id);
            if (task) {
                task.isDone = !task.isDone;
            }
        },
        updateProgress: (state, action) => {
            const { id, progress } = action.payload;
            const task = state.tasksList.find((task) => task.id === id);
            if (task) {
                task.progress = progress;
            }
        },
    },
});


// SELECTORS


// base selector
export const selectTaskState = (state) => state.task;

// all tasks
export const selectTasks = createSelector(
    [selectTaskState],
    (taskState) => taskState.tasksList
);

// selected task
export const selectSelectedCategory = (state) => state.category.selectedCategory;

// tasks by id
export const selectTaskByCategory = createSelector(
    [selectTasks, selectSelectedCategory],
    (tasks, selectedCategory) => {
        if (!selectedCategory) return tasks;
        return tasks.filter((task) => task.category === selectedCategory);
    }
);

// count of finished tasks
export const selectCompletedTasks = createSelector(
    [selectTasks],
    (tasks) => tasks.filter((task) => task.isDone).length
);

// task by id
export const selectTaskById = (id) =>
    createSelector([selectTasks], (tasks) =>
        tasks.find((task) => task.id === id)
    );


// ACTIONS

export const {
    addTask,
    editTask,
    removeTask,
    toggleTask,
    updateProgress,
} = tasksSlice.actions;

export default tasksSlice.reducer;
