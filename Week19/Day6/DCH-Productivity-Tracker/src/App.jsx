import './App.css'
import CategorySelector from './features/categories/CategorySelector';
import TaskList from './features/tasks/TaskList';
import AddCategoryForm from './features/categories/AddCategoryForm';
import AddTaskForm from './features/tasks/AddTaskForm';

function App() {


  return (
    <>
     
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h1>Task Manager</h1>

        {/* Add new category */}
        <AddCategoryForm />

        {/* Add new task */}
        <AddTaskForm />

        {/* Select category */}
        <CategorySelector />

        {/* Show tasks from selected category */}
        <TaskList />
      </div>


    </>
  )
}

export default App
