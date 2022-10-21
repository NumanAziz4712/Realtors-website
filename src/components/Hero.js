import React from "react";
import TopRealtors from "./TopRealtors";
import Logo from "../assets/logo.png";
import { Logos } from "../utils/data";
const Hero = () => {
  return (
    <div className=' flex flex-col lg:flex-row '>
      {/* hero image and content */}
      <div className='h-full hero-image flex-1'>
        <div className='bg-gradient-to-r xl:px-24  px-8 from-slate-900/95 to-slate-900/90 pb-20 h-full'>
          {/* logo */}
          <div className='flex flex-col items-center pt-8'>
            <img
              src={Logo}
              className='w-[20%] md:w-[15%]'
              alt='nextor logo'
            />
          </div>

          {/* hero content */}
          <div className='flex flex-col mt-20'>
            <span className='uppercase font-medium text-[#c69963] tracking-wider md:text-base text-sm'>
              your own home
            </span>
            <h1 className='font-semibold  text-3xl md:text-5xl mt-2 text-white '>
              The ultimate personal freedom
            </h1>

            {/* button */}

            <div className='md:mb-14 mb-10 md:mt-10 mt-8'>
              <button className='uppercase font-medium hover:bg-[#c07f30] text-white md:text-base text-sm bg-[#c69963] px-6 py-2 md:py-3 tracking-wide'>
                view your properties
              </button>
            </div>
          </div>

          {/* socila proof */}
          <div className=''>
            {/* separator */}
            <div className='flex items-center gap-6'>
              <div className='h-px w-full  bg-slate-600'></div>
              <span className='flex-none text-slate-500  '>
                Seen on
              </span>
              <div className='h-px w-full bg-slate-600'></div>
            </div>

            {/* logos */}
            <div className='flex mt-3 items-center justify-around'>
              {Logos.map((logo) => (
                <div key={logo.id}>
                  <img
                    className='md:w-[100px] w-16 opacity-60'
                    src={logo.logo}
                    alt=''
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* top realtors */}
      <div className='w-full lg:w-[25%] bg-slate-900'>
        <TopRealtors />
      </div>
    </div>
  );
};

export default Hero;
