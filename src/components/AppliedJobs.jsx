import React, { useEffect, useState } from "react";
import bgOne from "../../public/assets/All Images/Vector.png";
import bgTwo from "../../public/assets/All Images/Vector-1.png";
import AppliedJobsDetails from "./AppliedJobsDetails";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const jobsData = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(jobsData);
    setFilteredJobs(jobsData); // set filteredJobs to jobsData by default
  }, []);

  const handleOnsiteClick = () => {
    setSelectedButton("onsite");
    const onsiteJobs = jobs.filter((job) => job.remote_or_onsite === "Onsite");
    setFilteredJobs(onsiteJobs);
  };

  const handleRemoteClick = () => {
    setSelectedButton("remote");
    const remoteJobs = jobs.filter((job) => job.remote_or_onsite === "Remote");
    setFilteredJobs(remoteJobs);
  };

  return (
    <section>
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
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <div className="flex justify-end mb-5">
          <div className="relative inline-block bg-[#F4F4F4]">
            <div className="flex justify-center gap-4">
              <button
                className={`bg-[#F4F4F4] px-2 py-1.5 border border-1 border-gray-300 rounded font-semibold text-[#474747] ${
                  selectedButton === "onsite" ? "btn-primary" : ""
                }`}
                onClick={handleOnsiteClick}
              >
                Show Onsite Jobs
              </button>
              <button
                className={`bg-[#F4F4F4] px-2 py-1.5 border border-1 border-gray-300 rounded font-semibold text-[#474747] ${
                  selectedButton === "remote" ? "btn-primary" : ""
                }`}
                onClick={handleRemoteClick}
              >
                Show Remote Jobs
              </button>
            </div>
          </div>
        </div>
        {filteredJobs.map((job) => (
          <AppliedJobsDetails key={job.id} job={job}></AppliedJobsDetails>
        ))}
      </div>
    </section>
  );
};

export default AppliedJobs;