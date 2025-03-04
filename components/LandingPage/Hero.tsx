"use client";

import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import FadeContent from "../ui/fadecontent";
import AnimatedContent from "../ui/animateContent";
import { motion } from "framer-motion";
import { Animatedregister } from "../ui/animatedregister";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="relative bg-black flex h-screen w-full flex-col justify-center items-center md:p-5 px-10  mt-28 md:mt-10 overflow-hidden">
      {/* Content */}
      <h1 className="text-white font-medium text-2xl text-center lg:text-6xl flex flex-col flex-wrap justify-center items-center">
        Google Developers Group On Campus
      </h1>

      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full flex justify-center items-center"
      >
        <img src="/assets/icons/wow.svg" className="md:w-3/5 z-50" alt="" />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="w-full flex justify-center items-center"
      >
        <span className="font-bold googleTextGrad text-5xl md:text-6xl">
          KERALA
        </span>
      </FadeContent>

     
         <Animatedregister />
       
    
    </div>
  );
};

export default Hero;
