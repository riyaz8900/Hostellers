import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex justify-between flex-col'>
      <div className='shadow-lg '>
        <div>
          <Navbar />
        </div>
        <div className='pt-[100px]'>
          <Outlet />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
