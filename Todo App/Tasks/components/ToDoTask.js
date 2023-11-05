import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const ToDoTask = ({ task, onDelete, onEdit }) => {
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEdit = () => {
        setEditMode(true);
    }

    const handleCancel = () => {
        setEditText(task.text);
        setEditMode(false);
    }
    const handleSave = () => {
        if (editText.trim !== ''){
            onEdit(task.id, editText);
            setEditMode(false);
        }
    }

    return (
        <li>
            <input type="checkbox"  />
            {task.text}
            &nbsp;<Button variant = "danger" onClick={() => onDelete(task.id)}>Delete task</Button>
            {editMode ? (
                <>
                    <input 
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    &nbsp;<Button variant = "success" onClick={() => handleSave()}>Save</Button>
                    &nbsp;<Button variant = "danger" onClick={() => handleCancel()}>Cancel</Button>
                </>
            ) : (
                <>
                     &nbsp;<Button variant = "primary" onClick={() => handleEdit()}>Edit task</Button>
                </>
            )}
        </li>
    );
}

export default ToDoTask;