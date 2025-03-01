"use client";

import React from "react";
import { Button } from "../ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Particles from '../ui/particles';
import FadeContent from '../ui/fadecontent';


const Hero = () => {
  return (
    <div className="relative bg-black flex h-screen w-full flex-col justify-center items-center md:p-5 px-10 mt-28 md:mt-10 overflow-hidden">

      {/* Content */}
      <h1 className="text-white font-medium text-2xl text-center lg:text-6xl flex flex-col flex-wrap justify-center items-center">
        Google Developers Group On Campus
      </h1>
     
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="w-full flex justify-center items-center">
      <img src="/assets/icons/wow.svg" className="md:w-3/5 z-50" alt="" /></FadeContent>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="w-full flex justify-center items-center">
      <span className="font-bold googleTextGrad text-5xl md:text-6xl">KERALA</span></FadeContent>
      

      <div className="w-[50vw] flex flex-col md:flex-row justify-end items-center md:justify-center m-24 md:m-4">
        <button className="h-16 ease-in-out duration-300 z-20 w-52 bg-[#ea4335] hover:bg-white hover:text-[#ea4335] font-medium text-md md:text-xl rounded-full md:my-8 my-4 mx-12">
          Register Now
        </button>
        <button className="h-16 ease-in-out duration-300 z-20 w-52 bg-[#f9ab00] hover:bg-white hover:text-[#f9ab00] font-medium text-md md:text-xl rounded-full md:my-8 my-4 mx-12">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Hero;
