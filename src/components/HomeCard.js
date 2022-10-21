import React from "react";
import House1 from "../assets/house-1.jpeg";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Square2StackIcon } from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/outline";

const HomeCard = () => {
  const price = 1950000;
  return (
    <div className='bg-white rounded-sm shadow overflow-hidden'>
      {/* home image */}
      <div className='w-full relative h-[200px]'>
        <img
          src={House1}
          alt='house picture'
          className=' h-full w-full object-cover'
        />
        <span className='absolute text-center bg-slate-900 text-white text-medium text-sm capitalize sm:text-base px-6 py-3 inset-x-[15%] bottom-0 translate-y-1/2'>
          Beautiful family house
        </span>
      </div>

      {/* home content */}
      <div className='px-8 text-sm text-slate-600 grid  grid-cols-2 gap-10 pt-16 pb-10'>
        <div className='flex item-center gap-2'>
          <MapPinIcon className='h-6 w-6 stroke-1  text-[#c69963]/70' />

          <span className=''>USA</span>
        </div>
        <div className='flex item-center gap-2'>
          <UserIcon className='h-6 w-6 stroke-1  text-[#c69963]/70' />
          <span className=''>6 rooms</span>
        </div>
        <div className='flex item-center gap-2'>
          <Square2StackIcon className='h-6 w-6 stroke-1  text-[#c69963]/70' />
          <span className=''>500 m2</span>
        </div>
        <div className='flex item-center gap-2'>
          <KeyIcon className='h-6 w-6 stroke-1 -rotate-180 flip-y text-[#c69963]/70' />
          <span className=''>
            ${price.toLocaleString("en-US")}
          </span>
        </div>
      </div>

      {/* read more  */}
      <button className='w-full py-3 bg-slate-300 font-medium text-sm sm:text-base uppercase tracking-wide hover:bg-slate-400/60 transition-all duration-200 '>
        read more
      </button>
    </div>
  );
};

export default HomeCard;
