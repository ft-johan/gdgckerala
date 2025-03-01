import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";
import Aboutgdsc from "@/components/About/Aboutgdsc";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ImagesSlider } from "@/components/ui/images-slider";
import { SiInstagram, SiLinkedin, SiReact, SiX } from "react-icons/si";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
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

  const testimonials = [
    { image: "./assets/images/kochi.jpg" },
    { image: "url_to_image2.jpg" },
    { image: "url_to_image3.jpg" },
    { image: "url_to_image4.jpg" },
    { image: "url_to_image5.jpg" },
  ];
  
  return (
    <div className="flex flex-col overflow-x-hidden">
      <NavBar />
      <div className="mt-16">
        <Aboutgdsc />
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 0,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
          </motion.div>
        </ImagesSlider>
        <div className="flex flex-col md:flex-row justify-end items-center md:justify-center">
          <button className="h-20 ease-in-out duration-300 z-20 w-64 gradColor font-medium text-md md:text-xl rounded-sm md:my-8 my-4 mx-4">
            Click Here
          </button>
        </div>
        <div className="max-w-5xl mx-auto px-8">

        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <h2 className="text-center font-medium text-2xl ">FAQ</h2>
        <Accordion type="single" collapsible className="w-full font-medium container md:pr-20 pr-5 md:pl-20 pl-5 pt-1 pb-10">
          <AccordionItem value="item-1">
            <AccordionTrigger  >Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <h2 className="text-center font-medium text-2xl">Contact us</h2>
        <div className="max-w-5xl mx-auto px-auto">
          <HoverEffect items={skills} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
