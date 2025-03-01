import React from "react";

const Sponsors = () => {
  return (
    <div className="h-screen p-20  w-full flex flex-col justify-evenly items-center">
      <h1 className="md:text-5xl text-3xl font-bold googleFont">Our Sponsors</h1>
      <div className="h-[50vh]  w-full flex flex-col md:flex-row my-5 justify-evenly items-center">
        <img src="/assets/images/zilmoney.png" className="md:h-2/5 my-10 md:my-0" alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
