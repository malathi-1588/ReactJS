import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import HotJobsSection from "./HotJobsSection";

const HotJobsPage = (props) => {
    const jobs = [
        {id: 1, name:'Transctn PROC ASST OPS MGR', exp: '7-10 Years Experience', location: 'Chennai'},
        {id: 2, name:'Transn Procng Opss Mgr',exp: '10-13 Years Experience', location: 'Chennai'}
    ];
    
    return (
        <div>
            <h1>{props.name}</h1>
            <div className="job-list">
                {jobs.map((job, index) => (
                    <HotJobsSection key={index} jobid={job.id} name={job.name} exp={job.exp} location={job.location} />
                ))}
            </div>
        </div>
    );
}
export default HotJobsPage;