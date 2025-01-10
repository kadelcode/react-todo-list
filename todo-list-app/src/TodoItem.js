import React from "react";

const TodoItem = ({ task, removeTask }) => {
    return (
        <li>
            <span>{task}</span>
            <button onClick={removeTask}>Delete</button>
        </li>
    );
};

export default TodoItem