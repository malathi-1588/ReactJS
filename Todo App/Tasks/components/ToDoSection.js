import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import ToDoList from "./ToDoList";

const ToDoSection = ({ section }) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(section.tasks);
    const addTask = () => {
        if (task.trim() !== ''){
            const newTask = {id:tasks.length + 1, text: task, completed: false};
            setTasks([...tasks, newTask]);
            setTask('');
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const editTask = (id, newText) => {
        const updatedTasks = tasks.map((task) => 
        (task.id === id) ? { ...task, text: newText } : task);
        setTasks(updatedTasks);
        console.log({updatedTasks});
    }

    return(
        <div>
            <h2>{section.title}</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter New Task"/>
            &nbsp;<Button variant="success" onClick={addTask}>Add New Task</Button>
            <ToDoList key={tasks.id} tasks={tasks} onDelete={deleteTask} onEdit = {editTask} />

        </div>
    );
}
export default ToDoSection;
