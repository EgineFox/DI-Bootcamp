import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

export default function AddTodo() {
    const [ text, setText ] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

  return (
    <form onSubmit={handleSubmit}>
       <input value={text} onChange={(e) => setText(e.target.value)} />
       <button type='submit'>Add Todo</button>
    </form>
  );
}
