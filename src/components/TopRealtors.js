import React from "react";
import { Realtors } from "../utils/data";
const TopRealtors = () => {
  return (
    <div className='flex flex-col py-10 items-center justify-center h-full gap-7 '>
      <p className='text-[#c69963] uppercase font-medium tracking-wider '>
        top 3 realtors
      </p>

      {/* realtors  */}
      <div className='text-white flex sm:flex-row  flex-col lg:flex-col gap-2 md:gap-4'>
        {/* realtor card */}

        {Realtors.map((realtor) => (
          <div
            key={realtor.id}
            className='flex sm:flex-col md:flex-row flex-row px-8 py-2 hover:bg-slate-800/60 cursor-pointer items-center gap-5'
          >
            <img
              src={realtor.image}
              className='w-16 h-16 rounded-full'
              alt='realtor photo'
            />
            <div className='flex flex-col'>
              <span className='font-medium uppercase'>
                {realtor.name}
              </span>
              <span className='text-slate-400 uppercase tracking-wide text-[10px]'>
                {realtor.house_sold} house sold
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRealtors;
