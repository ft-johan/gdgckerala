import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Timer from "@/components/Timer";
import Wow_logo from "@/public/wow_logo.png";
import Footer from "@/components/Footer";
import Hero from "@/components/LandingPage/Hero";
import TimeLine from "@/components/LandingPage/TimeLine";
import { useEffect } from "react";
import Venue from "@/components/LandingPage/Venue";
import Sponsors from "@/components/LandingPage/Sponsors";
import JoinUs from "@/components/LandingPage/JoinUs";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let color;
  
    if (scrollPosition <= 250) {
      color = '--google-blue';
    } else if (scrollPosition > 250 && scrollPosition <= 500) {
      color = '--google-red';
    } else if (scrollPosition > 500 && scrollPosition <= 750) {
      color = '--google-yellow';
    }else {
      color = '--google-green';
    }
  
    document.documentElement.style.setProperty('--scrollbar-thumb-color', `var(${color})`);
  });
}, []);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col googleFont">
        <Hero />
        <Timer />
        <Venue />
        <JoinUs/>
        <Sponsors />
        <TimeLine/>
        <Footer/> 
        {/* <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
          <Timer />
          <Image
            alt="helo"
            height={500}
            width={500}
            src={
              "https://io.google/2024/app/images/io24-join-community-cta-dark.svg"
            }
          />
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-white font-bold  text-[50px] lg:text-[150px]">
            GDSC WoW Kerala
          </h1>
          <p className="text-white font-normal text-[20px]">GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies. We are a part of Google Developers Student Clubs, a program for students to learn about Google technologies and build solutions for their local communities.</p>
        </div>
        */}
      </div>
    </div>
  );
}
