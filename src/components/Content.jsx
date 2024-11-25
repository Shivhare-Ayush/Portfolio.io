//import React from 'react'
import Card from './Card'
import trendsPreview from '../assets/trendsPreview.png'
import portfolio from '../assets/Portfolio.png'
import TechTags from './TechTags'
import Experience from './Experience.jsx'

const Content = () => {
  return (
    <div className="relative w-full p-6 overflow-x-hidden">
      <section id="about" className="mb-64 font-[Anzo3]"> 
        <h2 className="text-2xl font-semibold mb-4 font-[Anzo1]">About</h2>
        <div className="relative rounded-xl border border-white/10"> 
        <div className="absolute inset-0 bg-transparent backdrop-blur-0 blur-sm rounded-xl  pointer-events-none"></div>
          <div className="relative p-4">
            <p>
              I started software development in high school where I built simple programs for competitions and classes. Around the time I was a senior I participated in my first hackathon and was introduced to a world of developers and learned the joy of collaborative programming. Fast forward to today, I’m developing web services used by thousands of students, and pursuing a computer science major at The University of Texas at Dallas. I’ve had the opportunity to work on a project at Nebula Labs, which provides tools to Students like data visualization, indexing, comparing, and is web-hosted.
              <br />
              <br />
              Aside from clubs, I have started development on a prediction AI for Stocks. In my free time Ive built a game combining Lua and Roblox engine.
              <br />
              <br />
              Outside of computer science, I practice Taekwondo, play Badminton, and am always reading up on topics that interest me.
            </p>
          </div>
        </div>
      </section>
      <section id="experience" className="mb-64">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Experience/>

        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <TechTags/>
      </section>
      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2> 
        <div className="space-y-4">
          <Card title="Trends" techNames={["React","JavaScript", "Tailwind CSS","Github", "Figma"]} description="I work on this website with a team at Nebula Labs. We maintain and update this website on Github, and its built on React and Tailwind frontend and our API team uses GO for the backend." image={trendsPreview} link="https://trends.utdnebula.com" />
          <Card title="Portfolio" techNames={["React", "JavaScript", "Node.js", "Tailwind CSS", "Github", ]} description="Description of project 2" image={portfolio} link="https://shivhare-ayush.github.io" />
        </div>
      </section>
    </div>
  )
}

export default Content;
