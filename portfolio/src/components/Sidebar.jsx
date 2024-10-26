//import React from 'react'

const SideBar = () => {
  return (
    <div className="w-1/2 h-screen fixed p-6 text-white flex flex-col items-start basis-1/4 hover:basis-1/2">
       <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-pink-800  to-purple-800 relative inline-block mb-8">
    <span className="font-[Anzo2] relative text-[#0c0a09] text-6xl">Ayush Shivhare</span>
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
