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
import { ImagesSlider } from "@/components/ui/images-slider";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const inter = Inter({ subsets: ["latin"] });

const AboutPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  const testimonials = [
    { image: "./assets/images/kochi.jpg", quote: "Great experience!", name: "John Doe", title: "Developer" },
    { image: "url_to_image2.jpg", quote: "Loved it!", name: "Jane Smith", title: "Designer" },
    { image: "url_to_image3.jpg", quote: "Highly recommend.", name: "Alice Johnson", title: "Manager" },
    { image: "url_to_image4.jpg", quote: "Fantastic!", name: "Bob Brown", title: "Engineer" },
    { image: "url_to_image5.jpg", quote: "Will come back again.", name: "Charlie Davis", title: "Analyst" },
  ];
  
  return (
    <div className="flex flex-col bg-black">
      <NavBar />
      <div className="m-12">
        <Aboutgdsc />
    
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
