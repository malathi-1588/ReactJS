import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const InformationCenterSection = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    
    const toggleOpen = () => {
        setOpen(true);
    };
    const toggleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <li>
                {open ? (
                    <button onClick={() => toggleClose()}>
                        {open ? '-' : '+'} {question}
                    </button>
                ) : (
                    <button onClick={() => toggleOpen()}>
                        {open ? '-' : '+'} {question}
                    </button>
                )}
                {open && <p>{answer}</p>}
            </li>
        </div>
    );
}
export default InformationCenterSection;
