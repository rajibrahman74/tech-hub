import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <JobCategory />
      <FeaturedJobs />
    </div>
  );
};

export default Home;