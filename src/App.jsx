import React from 'react'
import Page1 from './pages/Page1'
import useMousePosition from './hooks/useMousePosition'

const App = () => {
  const { mousePosition, isFixed } = useMousePosition()
  const { x, y } = mousePosition

  return (
    <div className='relative flex transition-all duration-50'>
      <div className='absolute inset-0 bg-gradient-to-r from-[#0C0A09] via-[#302C27] to-[#0C0A09] mask-grid-pattern'>
        <div
          className={`pointer-events-none ${isFixed ? 'fixed' : 'absolute'} bg-gradient-to-r from-purple-800 via-pink-700 to-blue-800`}
          style={{
            left: x,
            top: y,
            width: '200px',
            height: '200px',
            blurradius: '10px',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(10px)',
          }}
        ></div>
      </div>
      
      <Page1 />
    </div>
  )
}

export default App
