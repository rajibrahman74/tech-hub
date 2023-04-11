import { useLoaderData, useParams } from "react-router-dom";
import JobDetailsData from "./JobDetailsData";
import bgOne from "../assets/All Images/Vector.png";
import bgTwo from "../assets/All Images/Vector-1.png";

const JobDetails = () => {
  const { id } = useParams();
  const features = useLoaderData();
  const data = features.find((feature) => feature.id === parseInt(id));

  return (
    <section className="max-w-7xl mx-auto">
      <div className="jobDetails h-[298px] flex justify-center items-center">
        <img
          className="absolute top-0 right-0 bg-no-repeat"
          src={bgTwo}
          alt=""
        />
        <h1 className="text-[#1A1919] text-3xl font-bold">Job Details</h1>
        <img className="absolute left-0 top-32" src={bgOne} alt="" />
      </div>
      <div>{<JobDetailsData data={data} />}</div>
    </section>
  );
};

export default JobDetails;