//import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Header from '../components/Header'
const Page1 = () => {
  return (
    <div className='bg-gradient-to-r from-white to-black h-max w-screen lg:flex  relative justify-between lg:px-12 py-24 px-10 
     grid-dots-1'>
    <Sidebar />
    <Header />
    <Content />
    </div>
  )
}

export default Page1
