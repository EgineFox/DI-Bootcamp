import React from "react";
import { useSelector } from "react-redux";
import { selectTasksByDay } from "../features/tasksSlice";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

function TaskList({ day }) {
    // useSelector reads tasks from the store
    const tasks = useSelector((state) => selectTasksByDay(state, day));

    if (!day) return <p>Please select a day.</p>;

    return (
        <div>
            <h2>Tasks for {day}</h2>
            {tasks.length === 0 ? (
                <p>No tasks for this day.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <span>{task.title}</span>
                            {task.done ? " ✅" : ""}
                            {/* Connected child components */}
                            <EditTask day={day} task={task} />
                            <DeleteTask day={day} id={task.id} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;