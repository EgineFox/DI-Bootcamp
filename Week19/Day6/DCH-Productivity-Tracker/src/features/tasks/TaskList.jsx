import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTaskByCategory,
  toggleTask,
  removeTask,
  editTask,
} from "./tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTaskByCategory);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleToggle = useCallback(
    (id) => {
      dispatch(toggleTask({ id }));
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => {
      dispatch(removeTask({ id }));
    },
    [dispatch]
  );

  const startEditing = useCallback((task) => {
    setEditingId(task.id);
    setNewTitle(task.title);
  }, []);

  const saveEdit = useCallback(() => {
    dispatch(editTask({ id: editingId, title: newTitle }));
    setEditingId(null);
    setNewTitle("");
  }, [dispatch, editingId, newTitle]);

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.length === 0 && <p>No tasks in this category</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.isDone ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>

                <button onClick={() => handleToggle(task.id)}>
                  {task.isDone ? "Undo" : "Done"}
                </button>

                <button onClick={() => startEditing(task)}>Edit</button>

                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
