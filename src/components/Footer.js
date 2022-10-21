import React from "react";

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-slate-900 text-slate-400'>
      <div className='divide-y divide-slate-800/70 max-w-6xl px-8 mx-auto '>
        <div className='pb-16 grid grid-cols-3 md:grid-cols-6 gap-4'>
          <a
            href='#'
            className='inline-block px-4 py-2 hover:bg-slate-800/60 uppercase text-xs text-center tracking-wide'
          >
            find your dream home
          </a>
          <a
            href='#'
            className='inline-block px-4 py-2 hover:bg-slate-800/60 uppercase text-center text-xs tracking-wide'
          >
            request proposal
          </a>
          <a
            href='#'
            className='inline-block px-4 py-2 hover:bg-slate-800/60 uppercase text-center text-xs tracking-wide'
          >
            download home planner
          </a>
          <a
            href='#'
            className='inline-block px-4 py-2 hover:bg-slate-800/60 uppercase text-center text-xs tracking-wide'
          >
            contact us
          </a>
          <a
            href='#'
            className='inline-block px-4 py-2 hover:bg-slate-800/60 uppercase text-center text-xs tracking-wide'
          >
            submit your property
          </a>
          <a
            href='#'
            className='inline-block px-4 py-2 hover:bg-slate-800/60 uppercase text-center text-xs tracking-wide'
          >
            come work with us
          </a>
        </div>

        {/* about developer */}

        <div className='pt-4 flex items-center justify-center gap-4'>
          <span>Developed by:</span>
          <a
            href={
              "http://my-portfolio-three-rose.vercel.app/"
            }
            className='underline hover:text-slate-200 '
          >
            Numan Aziz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
