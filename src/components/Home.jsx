import React from "react";
import FeaturedJobs from "./FeaturedJobs";
import HeroSection from "./HeroSection";
import JobCategory from "./JobCategory";

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
