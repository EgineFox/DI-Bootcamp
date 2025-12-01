import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/todoActions';

export default function TodoItem( { todo }) {
    const dispatch = useDispatch();

  return (
    <li>
        <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
        onClick={ () => dispatch(toggleTodo(todo.id))}
        >
            {todo.text}
        </span>
        <button onClick={ () => dispatch(removeTodo(todo.id))}>Delete</button>
    </li>
  );
}
