import React, { useState } from 'react';
import { searchJobApi } from '../utils/API';

const SearchJobs = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Submit Button Functioning.  Input read as:", searchInput);

        const response = await searchJobApi(searchInput);

        console.log(response);

        const { items } = await response.json();

        console.log(items);
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
        </>
    );
};

export default SearchJobs;