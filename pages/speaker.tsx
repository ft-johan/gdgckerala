import { Speaker } from "@/components/Speaker/Speakergdgc";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";


const SpeakerPage = () => {
  
  return (
    <div className="flex flex-col overflow-x-hidden">
      <NavBar />
      <div className=" p-10 mt-16">
      <Speaker/>
      </div>
      <Footer />
    </div>
  );
};
export default SpeakerPage;
