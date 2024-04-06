import React from "react";

const SearchBar = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
      <select className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="fullstack-developer">Web Developer</option>
        <option value="frontend-engineer">Frontend Engineer</option>
        <option value="backend-engineer">Backend Engineer</option>
        <option value="ios-developer">IOS Developer</option>
        <option value="android-developer">Andriod Developer</option>
      </select>

      <select className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="full-time">Full-Time</option>
        <option value="part-ime">Part-Time</option>
        <option value="contract">Contract</option>
      </select>

      <select className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="remote">Remote</option>
        <option value="in-office">In-Office</option>
        <option value="hyprid">Hyprid</option>
      </select>

      <select className="w-4/5 md:w-48 py-4 pl-5 text-black font-bold rounded-md cursor-pointer">
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="junior">Junior</option>
        <option value="med-level">Mid-level</option>
        <option value="senior">Senior</option>
      </select>
      <button className="w-4/5 md:w-48 bg-blue-500 text-white font-bold py-3 rounded-md ">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
