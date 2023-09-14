import React, { useState } from 'react';
import { searchJobApi } from '../utils/API';

const SearchJobs = () => {
    const [searchedJobs, setSearchedJobs] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }
        console.log("Submit Button Functioning.  Input read as:", searchInput);

        try {
            const response = await searchJobApi(searchInput);

            console.log(response);


            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const [ items ] = await response.json();

            console.log(items);

        const jobData = items.map((job) => ({
            title: job.data.job_title,
            pay: job.data.job_min_salary,
            employment_type: job.data.job_employment_type,
            description: job.data.job_description,
            location: job.data.job_city,
            benefits: job.data.job_benefits,
        }));

            console.log(jobData);

            setSearchedJobs(jobData);
            setSearchInput('');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <h1>Search for Jobs</h1>

        <form onSubmit={handleFormSubmit}>
            <input
                name='searchInput'
                value={searchInput}
                type='text'
                placeholder='Search for a Job'
                onChange={(e) => setSearchInput(e.target.value)}
                required
                className="py-3 px-4 w-full rounded-md"
            />
            <button>
                Submit
            </button>
        </form>

        
        <h2>
            {searchedJobs.length
            ? `Viewing ${searchedJobs.length} results:`
            : 'Search for a job to begin'}
        </h2>
        </>
    );
};

export default SearchJobs;