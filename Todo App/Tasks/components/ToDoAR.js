import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

import ToDoSection from "./ToDoSection";
const ToDoAR = (props) => {

    const [section, setSection] = useState('');
    const [sections, setSections] = useState([
        {id: 1, title:'Daily', tasks: []},
        {id: 2, title:'Weekly', tasks:[]}
    ]);
    const addSection = () => {
        if (section.trim() !== ''){
            const newSection = {title: section, tasks: []};
            setSections([...sections, newSection])
            setSection('');
        }
    }
    
    
    return (
        <div>
            <h1>{props.name}</h1>
            <input
                type="text"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                placeholder="Enter Section Name"
            />
            &nbsp;<Button onClick={() => addSection({})}>Add New Section</Button>
            {sections.map((section) => (
                <ToDoSection section={section} />
            ))}
        </div>
    );
}
export default ToDoAR;