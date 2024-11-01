import React, { useState } from 'react'
import trendsPreview from '../assets/trendsPreview.png'

function Card({ title, description, children, image, link }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

  };

  return (
    <div
      className='bg-[#0c0a09] rounded-xl p-7 m-2 hover:bg-[#1a1a1a] hover:shadow-lg hover:shadow-[#070605] hover:scale-105 transition-all duration-500 ease-in-out'
      onClick={toggleExpand}
      style={{
        cursor: 'pointer',
        maxHeight: isExpanded ? '50rem' : '20rem', // Use a large enough value for expanded state
        overflow: 'hidden',
      }}
    >
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      {isExpanded ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="" className="rounded-xl" />
        </a>
      ) : (
        <img src={image} alt="placeholder" className="rounded-xl" />
      )}
      {<p className='text-sm lg:text-base md:text-md m-4'>{description}</p>}
      {children}
    </div>
  )
}

export default Card
