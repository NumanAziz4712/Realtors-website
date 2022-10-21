import React from "react";
import AboutFeature from "./AboutFeature";
import { Services } from "../utils/data";
const About = () => {
  return (
    <div className='max-w-6xl px-8 grid-cols-1  lg:px-0 sm:grid-cols-2 lg:grid-cols-3 mx-auto grid gap-y-14  md:gap-16 py-24 lg:py-[120px] '>
      {Services.map((service) => (
        <AboutFeature service={service} key={service.id} />
      ))}
    </div>
  );
};

export default About;
