import React from 'react';
import { useSelector } from 'react-redux';
import { selectTaskByCategory } from './tasksSlice';

const TaskList = () => {
  const tasks = useSelector(selectTaskByCategory);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks in the selected category</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} {task.isDone ? '✅' : '❌'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;