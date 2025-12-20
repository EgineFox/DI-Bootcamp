import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectTaskByCategory,
  toggleTask,
  removeTask,
  updateProgress
} from "./tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();

  // получаем задачи, отфильтрованные по выбранной категории
  const tasks = useSelector(selectTaskByCategory);

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.length === 0 && <p>No tasks yet</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <div>
              <strong>{task.title}</strong> (category: {task.category})
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => dispatch(toggleTask({ id: task.id }))}
                />
                Done
              </label>
            </div>

            <div>
              <input
                type="range"
                min="0"
                max="100"
                value={task.progress}
                onChange={(e) =>
                  dispatch(
                    updateProgress({
                      id: task.id,
                      progress: Number(e.target.value),
                    })
                  )
                }
              />
              <span>{task.progress}%</span>
            </div>

            <button onClick={() => dispatch(removeTask({ id: task.id }))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
