import React, { useState } from "react";

const SearchBar = (props) => {
  const [filteredJobs, setFilteredJobs] = useState(props.jobs);
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");


  function handleSearch() {
  //  console.log(role, type, location, experience);
  //  console.log(props.jobs);
   const filtered = props.jobs.filter(job => { 
    const titleMatch = job.title === role
    const typeMatch = job.type === type
    const locationMatch = job.location === location
    const experienceMatch = job.experience === experience
    
    // console.log(titleMatch, typeMatch, locationMatch, experienceMatch);

    return titleMatch && typeMatch && locationMatch && experienceMatch
  
    })
    console.log(filtered);
    
    setFilteredJobs(filtered);
  }
  
  console.log(filteredJobs);
  props.filtered(filteredJobs)

  return (
    <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
      
        <select name='jobRole' onChange={(e)=> setRole(e.target.value)} className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
          <option value="" disabled hidden selected> Job Role </option>
          <option value="FullstackDeveloper">Web Developer</option>
          <option value="FrontendEngineer">Frontend Engineer</option>
          <option value="BackendEngineer">Backend Engineer</option>
          <option value="iOSDeveloper">IOS Developer</option>
          <option value="androidDeveloper">Andriod Developer</option>
        </select>

        <select name='jobType' onChange={(e)=> setType(e.target.value)} className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
          <option value="" disabled hidden selected>
            Job Type
          </option>
          <option value="FullTime">Full Time</option>
          <option value="PartTime">Part Time</option>
          <option value="Contract">Contract</option>
        </select>

        <select name='jobLocation' onChange={(e)=> setLocation(e.target.value)} className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
          <option value="" disabled hidden selected>
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="InOffice">In-Office</option>
          <option value="Hyprid">Hyprid</option>
        </select>

        <select name='jobExperience' onChange={(e)=> setExperience(e.target.value)} className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
          <option value="" disabled hidden selected>
            Experience
          </option>
          <option value="Junior">Junior</option>
          <option value="MidLevel">Mid level</option>
          <option value="Senior">Senior</option>
        </select>
        <button
          onClick={handleSearch}
          className="w-4/5 md:w-48 bg-blue-500 text-white font-bold py-3 rounded-md "
        >
          Search
        </button>
    
    </div>
  );
};

export default SearchBar;
