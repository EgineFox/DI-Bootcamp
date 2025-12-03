import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";

function AddTask({ day }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch(); // dispatch actions

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!day || !title.trim()) return;

        dispatch(
            addTask({
                day,
                task: { title, description, done: false },
            })
        );

        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Task</h3>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" disabled={!day}>
                Add
            </button>
        </form>
    );
}

export default AddTask;