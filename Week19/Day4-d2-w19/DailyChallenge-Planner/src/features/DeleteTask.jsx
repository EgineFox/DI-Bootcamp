import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasksSlice";

function DeleteTask({ day, id }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask({ day, id }));
    };

    return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteTask;