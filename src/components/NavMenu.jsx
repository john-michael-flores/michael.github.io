import React from 'react'
import Fade from 'react-reveal/Fade';

function NavMenu({setIsCollapsed}) {
  return (
    <Fade top>
    <div className='w-full transition-all delay-75 ease-in-out'>
      <ul className='flex flex-col justify-center items-center text-white gap-4'>
        <a href='#home' onClick={() => setIsCollapsed(false)} className="hover:text-blue-700 ease-in-out delay-75 transition- cursor-pointer">Home</a>
        <a href='#about' onClick={() => setIsCollapsed(false)} className="hover:text-blue-700 ease-in-out delay-75 transition-all cursor-pointer">About</a>
        <a href='#skills' onClick={() => setIsCollapsed(false)} className="hover:text-blue-700 ease-in-out delay-75 transition-all cursor-pointer">Skills</a>
        <a href='#proj' onClick={() => setIsCollapsed(false)} className="hover:text-blue-700 ease-in-out delay-75 transition-all cursor-pointer">Projects</a>
      </ul>
    </div>
    </Fade>
  )
}

export default NavMenu