import React from 'react';
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from './todoSlice';

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <>
            <div>ToDoItem</div>

            <div className='containerItem'>
                <h2 className='itemText'
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none"
                    }}
                >{todo.text}</h2>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo({ id: todo.id }))}
                />
                <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                    Delete
                </button>

            </div>


        </>
    );
}
