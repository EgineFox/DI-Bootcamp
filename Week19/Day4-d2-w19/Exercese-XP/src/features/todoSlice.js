import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload.id);
        }
    }

});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
