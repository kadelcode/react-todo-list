import React, { useState } from "react";

const TodoInput = ( { addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim()) {
            // Pass the new task to the parent component
            addTask(task);

            // Clear the input field
            setTask("")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoInput