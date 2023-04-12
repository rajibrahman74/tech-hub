import React, { useEffect, useState } from "react";
import bgOne from "../assets/All Images/Vector.png";
import bgTwo from "../assets/All Images/Vector-1.png";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const jobsData = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(jobsData);
  }, []);

  return (
    <section className="">
      <style>
        {`.liner-gradient {
          background: linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%);
        }`}
      </style>
      <div className="jobDetails h-[298px] flex justify-center items-center liner-gradient">
        <img
          className="absolute top-0 right-0 bg-no-repeat"
          src={bgTwo}
          alt=""
        />
        <h1 className="text-[#1A1919] text-3xl font-extrabold">Applied Jobs</h1>
        <img className="absolute left-0 top-[151px]" src={bgOne} alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex justify-end">
          <div class="relative inline-block bg-[#F4F4F4]">
            <select class="block appearance-none w-full px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer text[#474747] bg-[#F4F4F4] font-semibold">
              <option>Filter By</option>
              <option>Remote</option>
              <option>Onsite</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z" />
              </svg>
            </div>
          </div>
        </div>
        {jobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>
        ))}
      </div>
    </section>
  );
};

export default AppliedJobs;