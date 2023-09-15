import React, { useState } from "react";
import { searchJobApi } from "../utils/API";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

const SearchJobs = () => {
  const [searchedJobs, setSearchedJobs] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());


  
  
  const JobModal = () => (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="flex flex-col mx-12 bg-gray-600 p-8 rounded-md shadow-lg max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0">
          <button
            className="bg-gray-400 bg-opacity-50 text-red-500 text-center items-center text-sm p-2 rounded-lg"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
        {currentJob && (
            <>
            <div className="text-center p-5 mx-5">
              <h3>{currentJob.title}</h3>
              <p>Location: {currentJob.location}</p>
              <p>Company: {currentJob.employer_name}</p>
              <p>Employment Type: {currentJob.employment_type}</p>
              <p>Pay: {currentJob.pay}</p>
              <p>Benefits: {currentJob.benefits}</p>
              <p>
                Description: <br /> {currentJob.description}
              </p>
              <a
                className="text-bold text-blue-400"
                href={currentJob.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
  const LoginPromptModal = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="flex flex-col mx-12 bg-gray-600 p-8 rounded-md shadow-lg">
        <button
          className="bg-gray-400 bg-opacity-50 text-red-500 text-center items-center text-sm p-2 rounded-lg"
          onClick={() => setShowLoginPrompt(false)}
        >
          Close
        </button>
        <div className="text-center p-5 mx-5">
          <h3>You need to be logged in to view job details.</h3>
          <Link to="/login" className="text-bold text-blue-400">
            Login
          </Link>
          <span> or </span>
          <Link to="/signup" className="text-bold text-blue-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
  
  const handleJobClick = (job) => {
    if (isLoggedIn) {
      setCurrentJob(job);
      setShowModal(true);
    } else {
      setShowLoginPrompt(true);
    }
  };

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
        throw new Error("something went wrong!");
      }

      const items = await response.json();

      console.log(items);

      const itemsList = items.data;

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
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h1>Search for Jobs</h1>
    

      <form className="text-white" onSubmit={handleFormSubmit}>
        <input
          name="searchInput"
          value={searchInput}
          type="text"
          placeholder="Search for a Job"
          onChange={(e) => setSearchInput(e.target.value)}
          required
          className="py-3 px-4 w-full footer1 rounded-md"
        />
        <button>Submit</button>
      </form>

      <h2 className="text-3xl font-semibold mb-8">
        {searchedJobs.length
          ? `Viewing ${searchedJobs.length} results:`
          : "Search for a job to begin"}
      </h2>

      <section className="job-listings py-16 grid grid-cols-2 gap-4">
        {searchedJobs.map((job) => {
          return (
            <li
              key={job.title}
              className="border p-4 hover:bg-teal-900 list-none"
              onClick={() => handleJobClick(job)}
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="mt-2">Location: {job.location}</p>
              <p>Company: {job.employer_name}</p>
              <p>Employment Type: {job.employment_type}</p>
            </li>
          );
        })}
        {showModal && <JobModal />}
        {showLoginPrompt && <LoginPromptModal />}
      </section>
    </>
  );
};

export default SearchJobs;
