import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeaturedJobsDetails from "./FeaturedJobsDetails";

const FeaturedJobs = () => {
  const [featuresDatas, setFeaturesDatas] = useState([]);

  useEffect(() => {
    fetch("featured-jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturesDatas(data));
  }, []);

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/jobdetails/${id}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-4xl text-gray-900 font-bold">
        Featured Jobs
      </h2>
      <p className="text-[#757575] mt-[16px] text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="mt-8 flex flex-wrap gap-6 mx-auto">
        {featuresDatas.map((fj) => (
          <FeaturedJobsDetails
            key={fj.id}
            fj={fj}
            handleViewDetails={handleViewDetails}
          />
        ))}
      </div>
      <span className="flex justify-center items-center mt-10 mb-32">
        <button className="w-[145px] h-[55px] flex justify-center items-center font-bold text-[17px] rounded-[8px] text-white bg-gradient-to-r from-blue-400 to-purple-600">
          <Link>See All Jobs</Link>
        </button>
      </span>
    </section>
  );
};

export default FeaturedJobs;