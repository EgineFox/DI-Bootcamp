import React, { createContext, useContext, useReducer } from 'react'

// Create a context for the todo state and dispatch
const TodoContext = createContext();

//reducer function
function todoReducer( state, action ) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "TOGGLE_TODO":
            return state.map((todo) => todo.id===action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
        );
        default:
            return state;
    }
}

function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(todoReducer, []);
    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

function ToDoList() {
    const { todos, dispatch } = useContext(TodoContext);
 // const [ todos, dispatch ] = useReducer(todoReducer, []);

  const handleAddTodo = (text) => {
    if (text.trim()) {
        dispatch({ type: "ADD_TODO", payload: text});
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id});
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }
    
  return (
    <div>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                    />
                    {todo.text}
                    <button onClick={ ()=> handleDeleteTodo(todo.id)}>Delete</button>

                </li>
            ))}
        </ul>
        <input 
        type="text"
        placeholder='Add a new todo'
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleAddTodo(e.target.value);
                e.target.value = "";
            }
        }}
        />
    </div>
  )
}

export {ToDoList, TodoProvider}