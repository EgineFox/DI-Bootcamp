import React, { useContext, useState } from "react";
import TaskContext from "./TaskContext";

export default function TaskManager() {
  const { tasks, dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState(""); // local state for input
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  const handleEditTask = (id, newText) => {
    if (newText.trim()) {
      dispatch({ type: "EDIT_TASK", payload: { id, text: newText } });
    }
    setEditingId(null);
    setEditText("");
  };

  return (
    <div>
      {/* Input field and button */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add</button>

      {/* Task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            />

            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditTask(task.id, editText)}>
                  Save
                </button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button
                  onClick={() => {
                    setEditingId(task.id);
                    setEditText(task.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}