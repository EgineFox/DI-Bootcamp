import React from "react";
import { TaskProvider } from "./components/TaskProvider";
import AddTaskForm from "./components/AddTaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import "./App.css";

export default function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Task Manager</h1>
        <AddTaskForm />
        <TaskFilter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}