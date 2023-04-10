import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    console.log(id);


    return (
        <div>
            <h1>This is JobDetails page for job {id}</h1>
        </div>
    );
};

export default JobDetails;


    // Use the job ID to fetch job data and render it in the component