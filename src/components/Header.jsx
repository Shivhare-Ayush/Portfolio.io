//import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
      <div className="bg-transparent w-full max-w-screen-lg h-max p-6 text-white flex lg:hidden lg:sticky top-24 flex-col items-start ">
          <span className="  relative mb-8">
        <span className="font-[Anzo2] relative text-[#0c0a09] bg-clip-text text-6xl text-opacity-10 bg-gradient-to-br from-pink-800  to-purple-800">Ayush Shivhare</span>
      </span>
      <div className="flex gap-4 mt-8">
        <a href="https://www.linkedin.com/in/ayushshiv//" target="_blank" rel="noreferrer">
          <FaLinkedin className="text-4xl hover:text-purple-400 hover:translate-y-2 transition duration-200" />
        </a>
        <a href="https://github.com/Shivhare-Ayush" target="_blank" rel="noreferrer">
          <FaGithubSquare className="text-4xl hover:text-purple-400 hover:translate-y-2 transition duration-200" />
        </a>
    </div>
      </div>
      
  )
}

export default Header
