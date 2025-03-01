import React from 'react'

const JoinUs = () => {
  return (
    <div className='md:h-[75vh]  w-full flex flex-col md:flex-row  first-letter:justify-evenly items-center googleFont px-6'>
      <div className='md:h-[90%] md:pb-0 pb-40 rounded-2xl relative md:w-[75%] mt-16 md:mt-0 mx-4  border-2 p-10'>
        <h1 className='text-3xl font-bold googleFont'>Join a community group</h1>
        <p className='md:w-1/2 py-2 text-lg'>Meet developers, discover local groups, and build your global network.</p>
        <button className='px-8 py-4 border-2 rounded-full border-accentcolor  hover:bg-accentcolor ease-in-out duration-300 my-6'>Get Started</button>
        <img src="/assets/images/com.svg" className='absolute bottom-0  right-0' alt="" />
      </div>
      <div className='md:h-[90%] md:pb-0 pb-40 relative rounded-2xl md:w-1/3 mt-10 md:mt-0 mx-4 border-2 p-10'>
        <h1 className='text-3xl font-bold googleFont'>Break the loop</h1>
        <p className='w-3/4 py-2 text-lg'>Twist, turn, and teleport your way to the finish line with this year's I/O puzzle.</p>
        <button className='px-8 py-4 border-2 rounded-full border-accentcolor  hover:bg-accentcolor ease-in-out duration-300 my-6'>Play</button>
        <img src="/assets/images/comunity.webp" className='absolute w-3/5 rounded-2xl bottom-0 right-0' alt="" />
      </div>
    </div>
  )
}

export default JoinUs
