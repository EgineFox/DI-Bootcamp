import React, { useRef, useState, useEffect } from "react";
import { useTasks, ACTIONS } from "./TaskProvider";

export default function TaskItem({ task }) {
  const { dispatch } = useTasks();

  // Local editing state toggles the UI between label and input
  const [isEditing, setIsEditing] = useState(false);
  // Ref to the input used for editing text
  const editRef = useRef(null);

  // Focus the input when editing starts
  useEffect(() => {
    if (isEditing) {
      editRef.current?.focus();
      // Pre-fill input with current task text
      if (editRef.current) editRef.current.value = task.text;
    }
  }, [isEditing, task.text]);

  const toggleCompleted = () => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: { id: task.id } });
  };

  const deleteTask = () => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } });
  };

  const startEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    const newText = editRef.current?.value.trim();
    if (newText && newText !== task.text) {
      dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: task.id, text: newText } });
    }
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <li className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompleted}
        aria-label="Toggle completed"
      />

      {!isEditing ? (
        <>
          <span className={`text ${task.completed ? "done" : ""}`} onClick={startEdit}>
            {task.text}
          </span>
          <div className="row gap">
            <button className="btn" onClick={startEdit}>Edit</button>
            <button className="btn danger" onClick={deleteTask}>Delete</button>
          </div>
        </>
      ) : (
        <>
          <input
            ref={editRef}
            type="text"
            className="input"
            aria-label="Edit task"
            // We use ref value instead of local state for simplicity per exercise
          />
          <div className="row gap">
            <button className="btn primary" onClick={saveEdit}>Save</button>
            <button className="btn" onClick={cancelEdit}>Cancel</button>
          </div>
        </>
      )}
    </li>
  );
}