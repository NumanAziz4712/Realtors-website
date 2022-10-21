import React from "react";

const TestemonialsText = () => {
  return (
    <div className=' h-full px-10  md:px-24 md:pl-[100px] py-20 '>
      <span className='uppercase font-medium text-[#c69963] tracking-wider md:text-base text-sm'>
        HAPPY CUSTOMERS
      </span>
      <h2 className='font-semibold text-2xl mb-8 md:text-4xl  mt-2 text-slate-800 italic'>
        “The best decision of our lives”
      </h2>
      <p className='text-slate-500 leading-[155%] text-sm md:text-base'>
        Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Tenetur distinctio necessitatibus pariatur
        voluptatibus. Quidem consequatur harum volupta!
      </p>

      <div className=' mt-8 md:mt-10'>
        <button className='uppercase font-medium hover:bg-[#c07f30] text-white md:text-base text-sm bg-[#c69963] px-6 py-2 md:py-3 tracking-wide'>
          find your own home
        </button>
      </div>
    </div>
  );
};

export default TestemonialsText;
