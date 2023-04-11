import { useLoaderData, useParams } from "react-router-dom";
import JobDetailsData from "./JobDetailsData";
import bgOne from "../assets/All Images/Vector.png";
import bgTwo from "../assets/All Images/Vector-1.png";
import { useState } from "react";

const JobDetails = () => {
  const [appliedjobs, setAppliedJobs] = useState([]);

  const { id } = useParams();
  const features = useLoaderData();
  const data = features.find((feature) => feature.id === parseInt(id));







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
          <h1 className="text-[#1A1919] text-3xl font-extrabold">
            Job Details
          </h1>
          <img className="absolute left-0 top-[151px]" src={bgOne} alt="" />
        </div>

        {/* job deaisl data */}
        {<JobDetailsData data={data} />}
    </section>
  );
};

export default JobDetails;