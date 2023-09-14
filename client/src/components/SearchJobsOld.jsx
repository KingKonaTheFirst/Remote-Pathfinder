import React, { useState, useEffect } from 'react';
import Input from './Input';

import Auth from '../utils/auth';
import { searchJobApi } from '../utils/API';

const SearchJobs = () => {
    const [searchedJobs, setSearchedJobs] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
            return false;
        }

        try {
            const response = await searchJobApi(searchInput);

            console.log(response);


            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { items } = await response.json();

            const jobData = items.map((job) => (
                console.log(job.data.job_title),
                console.log(job.job_title)
            ));

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
            <Input
            name='searchInput'
            value={searchInput}
            type='text'
            placeholder='Search for a Job'
            onChange={(e) => setSearchInput(e.target.value)}
            required
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
    )
};

export default SearchJobs;