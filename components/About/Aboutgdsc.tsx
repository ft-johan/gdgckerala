"use client";

import React from "react";

import FadeContent from "../ui/fadecontent";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiInstagram, SiLinkedin, SiReact, SiX } from "react-icons/si";

const Aboutgdsc = () => {
    
      const skills = [
          {
            Icon: SiInstagram,
            link: "www.sdgjvh.com",
          },
          {
            Icon: SiLinkedin,
            link: "www.sdgjvh.com",
          },
          {
            Icon: SiX,
            link: "www.sdgjvh.com",
          },
        ]
      
  return (
    <div className="relative bg-black  min-h-screen">
      <div className="h-screen flex  w-full flex-col justify-center items-center md:p-5 px-10  mt-28 md:mt-5 overflow-hidden">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full  flex justify-center items-center"
      >
        <img src="/assets/icons/wow.svg" className="md:w-2/5 z-50" alt="" />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full flex justify-center items-center"
      >
        <span className="font-bold m-5 googleTextGrad text-5xl md:text-6xl">
          KERALA 2024
        </span>
      </FadeContent>
      <p className="text-xl font-bold mt-12 w-5/6 text-center">
        The Google Developer Students Club WOW Summit 2024, held in
        collaboration with IEDC JAIN( Deemed-to-beUniversity),Kochi Campus
        brought together over 180 students from across Kerala for a day of
        immersive learning and meaningful connections. Hosted at Jain Deemed to
        be University, the event featured engaging workshops covering a diverse
        range of topics and thought-provoking panel discussions led by industry
        experts. Attendees were empowered to expand their horizons and explore
        new possibilities. Networking games added a fun and interactive element,
        fostering relationships and facilitating collaboration among
        participants. The summit catalyzed personal growth and collective
        inspiration as students eagerly participated in workshops, exchanged
        ideas during panel discussions, and forged new connections through
        networking activities.
      </p></div>
      <div style={{ height: '600px', position: 'relative' }}>
</div>
    <h2 className="mt-12 text-center font-medium text-2xl">Contact us</h2>
        <div className="max-w-5xl px-auto mx-auto">
          <HoverEffect items={skills} />
        </div>
    </div>
  );
};

export default Aboutgdsc;
