//import React from 'react'
import Card from './Card'
import trendsPreview from '../assets/trendsPreview.png'




const Content = () => {
  return (
    <div className="bg-transparent lg:w-1/2 p-6">
      <section id="about" className="mb-32 font-[Anzo1]">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>I started software development in high school where I built simple programs for competitions and classes. Around the time I was a senior I participated in my first hackathon and was introduced to a world of developers and learned the joy of collaborative programming. Fast forward to today, I’m developing web services used by thousands of students, and pursuing a computer science major at The University of Texas at Dallas. I’ve had the opportunity to work on a project at Nebula Labs, which provides tools to Students like data visualization, indexing, comparing, and is web-hosted.

Aside from clubs, I have started development on a prediction AI for Stocks. In my free time Ive built a game combining Lua and Roblox engine.

Outside of computer science, I practice Taekwondo, play Badminton, and am always reading up on topics that interest me.</p>
      </section>
      <section id="experience" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <p>Experience section content...</p>
      </section>
      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="flex-shrink-0">
        <Card 
        title="Trends" 
        description="I work on this website with a team at Nebula Labs. We maintain and update this website on Github, and its built on React and Tailwind frontend and our API team uses GO for the backend."
        image={trendsPreview}
        link="https://trends.utdnebula.com"
        > 
        </Card>
        </div>
        <Card title="To Be Added"/>
      </section>
    </div>
  )
}

export default Content
