import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'


export default function AddTodo() {
 //   const todos = useSelector(state => state.todoreducer.todos);
    const dispatch = useDispatch();
    const newTodoRef = useRef();
    return (
        <>
            AddTodo <br />
            <input
                ref={newTodoRef} type="text"
                placeholder='Enter a new TODO for today...'
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        dispatch(
                            addTodo({
                                id: Date.now(),
                                text: newTodoRef.current.value,
                                completed: false
                            })
                        );
                        newTodoRef.current.value = "";
                    }
                }}


            />

            <button onClick={() => {
                dispatch(
                    addTodo({
                        id: Date.now(),
                        text: newTodoRef.current.value,
                        completed: false
                    })
                );
                newTodoRef.current.value = ""; 
            }}
            >
            ADD</button>
        </>
    )
}

