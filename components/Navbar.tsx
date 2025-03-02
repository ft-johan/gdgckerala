import { Button } from "./ui/button";
import Wow_Circle from "@/public/wow_circle.png";
import { useRouter } from "next/router"; // Import the useRouter hook
import Image from "next/image";
/**
 * @todo Login button is currenlty commented !
 * @returns ReactNode
 */
export default function NavBar() {
  const router = useRouter(); // Initialize the router

  // Function to handle navigation to the about page
  const handleAboutClick = () => {
    router.push("/about"); // Redirect to the about page
  };
  const handleSpeakerClick = () => {
    router.push("/speaker"); // Redirect to the about page
  };

  // Function to handle navigation to the home page
  const handleHomeClick = () => {
    router.push("/"); // Redirect to the home page
  };


  return (
    <div className="flex flex-col dark fixed z-50 w-full">
      <div className="flex flex-row justify-between items-center z-50 h-10 m-5 p-2">
        <div className="flex items-center gap-4" onClick={handleHomeClick}>
          {/* Added onClick to the title to trigger handleHomeClick */}
          <img alt="WoW Logo" src={Wow_Circle.src} className="h-10 w-10" />
          <h1 className="text-[25px] leading-10 googleFont cursor-pointer hidden md:block">
            GDGC WoW
          </h1>
        </div>
        <div className="flex items-center">
          
          <button
            className="p-10 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={handleAboutClick} // Call handleAboutClick when the button is clicked
          >
            About
          </button>
          
          <button
            className="p-10 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={handleSpeakerClick} // Call handleAboutClick when the button is clicked
          >
            speaker
          </button>
          
          {/* Uncomment this when you want to include the login button */}
          {/* <Button variant={'outline'}>Login</Button> */}
        </div>
      </div>
      <hr className="bg-black" />
    </div>
  );
}
