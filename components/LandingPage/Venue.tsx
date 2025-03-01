import React from "react";

const Venue = () => {
  return (
    <div
      className="h-[60vh] relative  bg-fixed  w-full flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/assets/images/venue.jpg)" }}
    >
      {/* <img src="/assets/images/Ball.svg" className="absolute spinner top-0 -left-20" alt="" />
      <img src="/assets/images/Ball.svg" className="absolute spinner bottom-0 -right-20" alt="" /> */}
      <div className="h-full w-full z-20 flex justify-center items-center googleFont">
        <div className="bg-stale-300 h-full w-full rounded-xl shadow-lg flex flex-col justify-center items-center bg-cover bg-no-repeat">
          <div className="h-full w-full bg-black/70 flex justify-center items-center">
            <h1 className="md:text-5xl text-3xl text-center md:px-10 font-bold ">
              <div className="block md:text-3xl text-2xl">SEE YOU ALL AT</div>
              <div
                style={{
                  backgroundImage: `url('/assets/images/kochi.jpg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%', // adjust this value as needed
                  WebkitBackgroundClip: 'text',
                  MozBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
                className="md:text-[220px] text-[100px] py-6 md:py-0 my-4 break-all block googleFontB"
              >
                KOCHI
              </div>
              <div className="block  md:text-3xl text-2xl googleFont">
                ON MARCH <span className="textGrad">28th</span>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
