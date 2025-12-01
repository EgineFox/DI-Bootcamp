import './App.css'
import React from 'react';
import TaskContext , { TaskProvider } from './components/TaskContext';
import TaskManager from './components/TaskManager';

function App() {
 

  return (
    <>
    <TaskProvider >
      <TaskManager />
    </TaskProvider>

    </>
  )
}

export default App
