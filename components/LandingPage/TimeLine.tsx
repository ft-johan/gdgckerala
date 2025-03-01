import React from 'react'

const TimeLine = () => {
  return (
    <div className='flex h-screen  flex-col items-center w-full'>
      <div className='relative w-1/2'>
        <div className=' absolute h-full left-0'></div>
        {['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'].map((event, index) => (
          <div key={index} className='event w-full p-4 rounded-lg shadow-lg text-center border-2 border-accentcolor relative mb-10'>
            <div className={`absolute -left-3 top-1/2 transform -translate-y-1/2 bg-accentcolor w-6 h-6 rounded-full border-2 border-gray-300 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}></div>
            {event}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLine;