import React, { useRef } from "react";
import { useTasks, ACTIONS } from "./TaskProvider";

export default function AddTaskForm() {
  // useRef used to read the current input value
  const inputRef = useRef(null);
  const { dispatch } = useTasks();

  const handleAdd = (e) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (!value) return;
    dispatch({ type: ACTIONS.ADD_TASK, payload: { text: value } });
    inputRef.current.value = ""; // clear input after adding
  };

  return (
    <form onSubmit={handleAdd} className="row gap">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new task..."
        className="input"
      />
      <button type="submit" className="btn primary">Add</button>
    </form>
  );
}