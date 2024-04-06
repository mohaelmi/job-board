import React from "react";
import JobCard from "../JobCard/JobCard";

const JobList = ({ jobs }) => {
  return (
    <div className="md:mt-40 mb-10 mx-5 md:mx-24">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
