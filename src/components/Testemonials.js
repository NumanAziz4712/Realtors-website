import React from "react";
import bgImg from "../assets/back.jpg";
import Couple from "../assets/story-1.jpeg";
import Story from "../assets/story-2.jpeg";
import TestemonialsText from "./TestemonialsText";
const Testemonials = () => {
  return (
    <div className='md:grid flex flex-col-reverse   md:grid-cols-2'>
      {/* image */}
      <div className='relative '>
        <img
          src={bgImg}
          className='opacity-80 h-full'
          alt='background photo'
        />
        <div className='h-full w-full bg-yellow-500/30 absolute inset-0'></div>
        <div className='absolute  md:inset-[15%] inset-[20%]'>
          <img
            src={Couple}
            alt='couple photo'
            // className='h-[250px]'
          />
        </div>
      </div>

      {/* content */}
      <div className='bg-zinc-100'>
        <TestemonialsText />
      </div>
    </div>
  );
};

export default Testemonials;
