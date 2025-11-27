import React, { createContext, useReducer, useContext } from "react";

// Types for filters
export const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

// Action types
export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  DELETE_TASK: "DELETE_TASK",
  EDIT_TASK: "EDIT_TASK",
  SET_FILTER: "SET_FILTER",
};

// Initial state
const initialState = {
  tasks: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Task Manager", completed: true },
  ],
  filter: FILTERS.ALL,
};

// Reducer function
function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      return { ...state, tasks: [newTask, ...state.tasks] };
    }
    case ACTIONS.TOGGLE_TASK: {
      const tasks = state.tasks.map(t =>
        t.id === action.payload.id ? { ...t, completed: !t.completed } : t
      );
      return { ...state, tasks };
    }
    case ACTIONS.DELETE_TASK: {
      const tasks = state.tasks.filter(t => t.id !== action.payload.id);
      return { ...state, tasks };
    }
    case ACTIONS.EDIT_TASK: {
      const tasks = state.tasks.map(t =>
        t.id === action.payload.id ? { ...t, text: action.payload.text } : t
      );
      return { ...state, tasks };
    }
    case ACTIONS.SET_FILTER: {
      return { ...state, filter: action.payload.filter };
    }
    default:
      return state;
  }
}

// Context creation
const TaskContext = createContext();

// Provider component
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Expose state and dispatch to children
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook for consuming context
export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) {
    throw new Error("useTasks must be used within TaskProvider");
  }
  return ctx;
}
