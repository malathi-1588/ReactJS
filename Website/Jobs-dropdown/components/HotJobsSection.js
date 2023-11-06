import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const HotJobsSection = ({ jobid,name,exp,location }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Job ID: {jobid}</p>
            <p>{exp}</p>
            <p>Location: {location}</p>
            <Button variant='success'>Apply</Button>
            <Button variant='primary'>Share</Button>
        </div>
    );
}

export default HotJobsSection;