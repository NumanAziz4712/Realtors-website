import React from "react";
import Home from "../assets/gal-5.jpeg";
import Home8 from "../assets/gal-8.jpeg";
import Home9 from "../assets/gal-9.jpeg";
import Home11 from "../assets/gal-11.jpeg";
import Home12 from "../assets/gal-12.jpeg";
import Home13 from "../assets/gal-13.jpeg";
import Home14 from "../assets/house-1.jpeg";
import Home15 from "../assets/story-2.jpeg";
const HomesDisplay = () => {
  return (
    <div className='p-6 md:gap-6 gap-4 mb-20 bg-zinc-100 grid grid-cols-8 grid-rows-8'>
      <img
        src={Home}
        alt='home picture'
        className=' col-span-2 row-span-2'
      />
      <div className=' col-start-3  col-end-7 row-start-1 row-end-5'>
        {" "}
        <img
          src={Home8}
          alt='home picture'
          className='h-full'
        />
      </div>
      <img
        src={Home9}
        alt='home picture'
        className=' col-start-7  col-end-9 row-start-1 row-end-3'
      />
      <img
        src={Home11}
        alt='home picture'
        className=' col-start-1 col-end-3 row-start-3 row-end-5'
      />
      <img
        src={Home12}
        alt='home picture'
        className=' col-start-7 col-end-9 h-full row-start-3 row-end-5'
      />
      <img
        src={Home13}
        alt='home picture'
        className=' col-start-1 col-end-4 row-start-5 row-end-7'
      />
      <img
        src={Home14}
        alt='home picture'
        className=' col-start-4 col-end-6 row-start-5 row-end-7 h-full object-cover'
      />
      <img
        src={Home15}
        alt='home picture'
        className=' col-start-6 col-end-9 row-start-5 row-end-7 h-full object-cover'
      />
    </div>
  );
};

export default HomesDisplay;
