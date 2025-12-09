import React from 'react';
import DatePicker from './components/DatePicker';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Daily Planner</h2>
      <DatePicker />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
