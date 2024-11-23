import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { BsArrowUpRight, BsArrowDownLeft, BsBoxArrowUpRight } from 'react-icons/bs'
import { MdOpenInFull } from 'react-icons/md'
import { AiOutlineCompress } from 'react-icons/ai'

function Card({ title, description, children, image, link }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className='bg-[#0c0a09] rounded-xl p-7 m-2  hover:shadow-lg hover:shadow-[#070605] hover:scale-105 transition-all duration-1000 ease-in-out relative'
      onClick={toggleExpand}
      style={{
        cursor: 'pointer',
        maxHeight: isExpanded ? '50rem' : '20rem', // Use a large enough value for expanded state
        overflow: 'hidden',
      }}

    >
      <div className='absolute top-2 right-2 text-white lg:text-3xl hover:text-purple-400 hover:scale-150 transition-all duration-500 ease-in-out'>
        <BsArrowUpRight
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`}/>
        <BsArrowDownLeft
          className={`absolute top-2 right-2 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}/>
      </div>
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      {isExpanded ? (
        <a href={link} target='_blank' rel='noopener noreferrer' className='relative'>
          <div className='relative group'>
            <img src={image} alt='' className='rounded-xl' />
            <BsBoxArrowUpRight className='absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out' />
          </div>
        </a>
      ) : (
        <img src={image} alt='placeholder' className='rounded-xl' />
      )}
      <p className='text-sm lg:text-base md:text-md m-4'>{description}</p>
      {children}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Card
