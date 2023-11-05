import React from 'react';
import ToDoTask from './ToDoTask';

const ToDoList = ({ tasks, onDelete, onEdit }) => {
    return (
        <ul>
            {tasks && tasks.map((task) => (
                <ToDoTask key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </ul>
    );
}

export default ToDoList;