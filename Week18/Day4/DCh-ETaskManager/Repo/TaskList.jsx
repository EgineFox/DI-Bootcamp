import React from "react";
import { useTasks, FILTERS } from "./TaskProvider";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { state } = useTasks();
  const { tasks, filter } = state;

  const visibleTasks = tasks.filter(t => {
    if (filter === FILTERS.ACTIVE) return !t.completed;
    if (filter === FILTERS.COMPLETED) return t.completed;
    return true; // FILTERS.ALL
  });

  if (visibleTasks.length === 0) {
    return <p className="muted">No tasks to display.</p>;
  }

  return (
    <ul className="list">
      {visibleTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}