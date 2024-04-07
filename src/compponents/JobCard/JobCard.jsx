import React from "react";
import dayjs from "dayjs";

const JobCard = (props) => {
  const currentDate = dayjs(Date.now());
  const diffInDays = currentDate.diff(props.postedOn, "day");
  return (
    <div className="w-full flex md:flex-row flex-col justify-between m-auto my-10 md:mx-5 px-5 py-5 md:items-center bg-zinc-100 border rounded-md border-gray-300 shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-100">
      <div className="md:flex flex-col items-start gap-5">
        <h1 className="md:text-lg font-bold">
          {props.title} - {props.company}
        </h1>
        <p>
          {props.type} &#x2022; {props.experience} &#x2022; {props.location}
        </p>
        <div className="flex items-center gap-5 mt-4">
          {props.skills.map((skill, idx) => (
            <p key={idx}
              className="text-gray-500 py-1 px-2 rounded-md border border-gray-500" > {skill} </p>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-5 justify-between">
        <p className="text-gray-500 self-center">
          {diffInDays > 1 ? `Posted ${diffInDays} days ago` : "Posted today"}
        </p>
        <a href={props.job_link} target="_blank">
          <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">
            Apply
          </button>
        </a>
      </div>
    </div>
  );
};

export default JobCard;
