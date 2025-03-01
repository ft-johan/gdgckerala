"use client";

import React from "react";
import { Button } from "../ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Particles from '../ui/particles';

const Hero = () => {
  return (
    <div className="relative bg-black flex h-screen w-full flex-col justify-center items-center md:p-5 px-10 mt-28 md:mt-10 overflow-hidden">
      {/* Particles as Background */}
      <div className="absolute inset-0 z-10">
      <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={300}
    particleSpread={10}
    speed={0.5}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={true}
  />
      </div>

      {/* Content */}
      <h1 className="text-white font-medium text-2xl text-center lg:text-[30px] flex flex-col flex-wrap justify-center items-center">
        Google Developers Group On Campus
      </h1>

      <img src="/assets/icons/wow.svg" className="md:w-2/5 z-50" alt="" />
      <span className="font-bold googleTextGrad text-3xl">KERALA</span>
      <p className="md:px-56 md:text-xl py-4 text-sm lg:text-center text-justify flex justify-center items-center px-4 mb-8">
        GDGC WoW Kerala is a community of students and developers who are
        passionate about Google technologies. We are a part of Google Developers
        Group on Campus, a program for students to learn about Google technologies
        and build solutions for their local communities.
      </p>

      <div className="w-[50vw] flex flex-col md:flex-row justify-end items-center md:justify-center">
        <button className="h-16 ease-in-out duration-300 z-20 w-52 bg-black hover:bg-white hover:text-[#77256C] font-medium text-md md:text-xl rounded-full md:my-8 my-4 mx-12">
          Register Now
        </button>
        <button className="h-16 ease-in-out duration-300 z-20 w-52 bg-[#77256C] hover:bg-white hover:text-[#77256C] font-medium text-md md:text-xl rounded-full md:my-8 my-4 mx-12">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Hero;
