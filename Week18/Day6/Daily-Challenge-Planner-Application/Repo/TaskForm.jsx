import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../store/actions';
import { selectSelectedDate } from '../store/selectors';

function TaskForm({ selectedDate, onAdd }) {
  const [title, setTitle] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const task = {
      id: Date.now().toString(),
      title: title.trim(),
      done: false
    };
    onAdd(selectedDate, task);
    setTitle('');
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

const mapState = (state) => ({
  selectedDate: selectSelectedDate(state)
});

const mapDispatch = (dispatch) => ({
  onAdd: (dateStr, task) => dispatch(addTask(dateStr, task))
});

export default connect(mapState, mapDispatch)(TaskForm);