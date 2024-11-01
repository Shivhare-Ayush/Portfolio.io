//import React from 'react'
//FUTURE: basis-1/4 hover:basis-1/2
const SideBar = () => {
  return (
    <div className="bg-transparent w-1/2 h-max p-6 text-white hidden lg:flex lg:sticky top-24 flex-col items-start ">
      <span className="before:block before:absolute before:-inset-2 before:-skew-y-0  relative inline-block mb-8">
        <span className="font-[Anzo2] relative text-[#0c0a09] bg-clip-text text-6xl text-opacity-10 bg-gradient-to-r from-pink-800  to-purple-800">Ayush Shivhare</span>
      </span>
      
      <p className="font-[anzo1] mb-6">Studying CS at UTD</p>
      <nav className="flex flex-col gap-4 ">
        <a href="#about" className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition duration-200">About</a>
        <a href="#experience" className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition duration-200">Experience</a>
        <a href="#projects" className="hover:text-purple-400 hover:scale-125 hover:translate-x-5 transition duration-200">Projects</a>
      </nav>
    </div>
  )
}

export default SideBar
