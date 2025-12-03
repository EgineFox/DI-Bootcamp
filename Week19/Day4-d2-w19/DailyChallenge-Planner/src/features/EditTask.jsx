import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasksSlice";

function EditTask({ day, task }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(
            editTask({
                day,
                id: task.id,
                changes: { title, description },
            })
        );
        setIsEditing(false);
    };

    if (!isEditing) {
        return <button onClick={() => setIsEditing(true)}>Edit</button>;
    }

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
    );
}

export default EditTask;