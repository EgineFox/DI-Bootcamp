import React, { createContext, useReducer } from "react";

const TaskContext = createContext();

// state of list of tasks
const initialState = [];

// type of actions with tasks
const ActionTypes = {
  ADD_TASK: "ADD_TASK",
  EDIT_TASK: "EDIT_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: Date.now(),
          task: action.payload, // текст задачи
          completed: false,
        },
      ];
    case ActionTypes.EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, task: action.payload.text }
          : task
      );
    case ActionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case ActionTypes.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;