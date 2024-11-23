import React from 'react'
import Card from './Card'
import trendsPreview from '../assets/trendsPreview.png'


const Content = () => {
  return (
    <div className="relative w-full p-6 overflow-x-hidden">
      <section id="about" className="mb-64 font-[Anzo1]">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <div className="relative rounded-lg">
          <div className="absolute inset-0 bg-[#0c0a09] opacity-50 rounded-xl pointer-events-none"></div>
          <div className="relative p-4">
            <p>
              I started software development in high school where I built simple programs for competitions and classes. Around the time I was a senior I participated in my first hackathon and was introduced to a world of developers and learned the joy of collaborative programming. Fast forward to today, I’m developing web services used by thousands of students, and pursuing a computer science major at The University of Texas at Dallas. I’ve had the opportunity to work on a project at Nebula Labs, which provides tools to Students like data visualization, indexing, comparing, and is web-hosted.
              <br />
              <br />
              Aside from clubs, I have started development on a prediction AI for Stocks. In my free time I've built a game combining Lua and Roblox engine.
              <br />
              <br />
              Outside of computer science, I practice Taekwondo, play Badminton, and am always reading up on topics that interest me.
            </p>
          </div>
        </div>
      </section>
      <section id="experience" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p>Experience section content...</p>
      </section>
      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2> 
        <div className="space-y-4">
          <Card title="Project 1" description="Description of project 1" image={trendsPreview} link="https://example.com" />
          <Card title="Project 2" description="Description of project 2" image={trendsPreview} link="https://example.com" />
        </div>
      </section>
    </div>
  )
}

export default Content
