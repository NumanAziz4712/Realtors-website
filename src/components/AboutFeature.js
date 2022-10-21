import React from "react";

const AboutFeature = ({ service }) => {
  return (
    <div className='w-auto flex  gap-7'>
      <div className='  flex-none'>
        <span>{service.logo}</span>
      </div>

      <div>
        <h2 className='text-lg mb-3 font-medium text-slate-700'>
          {service.name}
        </h2>
        <p className='text-slate-500 text-sm sm:text-base'>
          {service.about}
        </p>
      </div>
    </div>
  );
};

export default AboutFeature;
