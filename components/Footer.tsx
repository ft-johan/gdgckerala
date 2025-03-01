import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#202124]">
            <hr className="bg-slate-400" />
            <div className="m-5">
                <div className="flex justify-center items-center gap-2">
                    <img src="/assets/images/gdsc-logo.png" className="w-8 h-8" alt="/"></img>
                    <h1 className="text-lg font-medium text-center">Google Developer Student Clubs</h1>
                </div>
                
                <div className="flex flex-row items-center gap-10 text-slate-300 mt-10">
                    <p>Terms & Conditions</p>
                    <p>Community Guidelines</p>
                    <p>Contact Us</p>
                </div>
                <div className="flex flex-row justify-center gap-10 mt-10">
                    <InstagramLogoIcon height={24} width={24} />
                    <LinkedInLogoIcon height={24} width={24} />
                    <TwitterLogoIcon height={24} width={24} />
                </div>
            </div>
        </div>
    );
}