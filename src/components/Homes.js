import React from "react";
import HomeCard from "./HomeCard";

const Homes = () => {
  return (
    <div className=''>
      <div className='max-w-6xl px-10 grid-cols-1  lg:px-0 sm:grid-cols-2 lg:grid-cols-3 mx-auto grid  gap-10 py-24 lg:py-[120px]'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};

export default Homes;
