import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, toggleTaskDone, editTask } from '../store/actions';
import { selectSelectedDate, selectTasksForSelectedDay } from '../store/selectors';

function TaskList({ selectedDate, tasks, onDelete, onToggle, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
  };

  const saveEdit = () => {
    if (!editTitle.trim()) return;
    onEdit(selectedDate, editingId, { title: editTitle.trim() });
    setEditingId(null);
  };

  return (
    <div>
      <h3>Tasks on {typeof selectedDate === 'string' ? selectedDate : JSON.stringify(selectedDate)}</h3>
      {tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {editingId === task.id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                    {task.title}
                  </span>
                  <button onClick={() => onToggle(selectedDate, task.id)}>
                    {task.done ? 'Uncheck' : 'Done'}
                  </button>
                  <button onClick={() => startEdit(task)}>Edit</button>
                  <button onClick={() => onDelete(selectedDate, task.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const mapState = (state) => ({
  selectedDate: selectSelectedDate(state),
  tasks: selectTasksForSelectedDay(state)
});

const mapDispatch = (dispatch) => ({
  onDelete: (dateStr, id) => dispatch(deleteTask(dateStr, id)),
  onToggle: (dateStr, id) => dispatch(toggleTaskDone(dateStr, id)),
  onEdit: (dateStr, id, updates) => dispatch(editTask(dateStr, id, updates))
});

export default connect(mapState, mapDispatch)(TaskList);
