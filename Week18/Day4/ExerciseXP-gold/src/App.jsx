import './App.css'
import {ToDoList, TodoProvider} from "./components/ToDoList"

function App() {

  return (
    <>
    <TodoProvider>
      <ToDoList />
    </TodoProvider>
    </>
  )
}

export default App
