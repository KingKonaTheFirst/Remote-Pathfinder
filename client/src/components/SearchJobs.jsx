import React, { useState } from 'react';
import { searchJobApi } from '../utils/API';
import { Link } from "react-router-dom";

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

            const items = await response.json();

            console.log(items);

            const itemsList = items.data

        const jobData = itemsList.map((job) => ({
            title: job.job_title,
            pay: job.job_min_salary,
            employment_type: job.job_employment_type,
            description: job.job_description,
            location: job.job_city,
            benefits: job.job_benefits,
            employer_name: job.employer_name,
            link: job.job_apply_link,
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

        
        <h2 className="text-3xl font-semibold mb-8">
            {searchedJobs.length
            ? `Viewing ${searchedJobs.length} results:`
            : 'Search for a job to begin'}
        </h2>

        <section className="job-listings py-16 justify-space-between">
                <ul className="space-y-4">
                    {searchedJobs.map((job) => {
                    return (
                        <li className="border p-4 hover:bg-teal-900">
                            <Link to={job.link} target='_blank'> 
                                <h3 className="text-xl font-semibold">{job.title}</h3>
                                <p className="mt-2">Location: {job.location}</p>
                                <p>Company: {job.employer_name}</p>
                                <p>Employment Type: {job.employment_type}</p>
                                <p>Pay: {job.pay}</p>
                                <p>Benefits: {job.benefits}</p>
                            </Link>
                        </li>
                    );
                    })}
                </ul>
            </section>
        </>
    );
};

export default SearchJobs;