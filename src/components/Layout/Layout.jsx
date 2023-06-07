import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../Layout/Layout.css'


function Layout() {
  return (

    <div>

      <nav className='top-nav'>

      <Link to="/">Home</Link>
      <Link to="/challenges">Challenges</Link>
      <Link to="/mychallenges">My Challenges</Link>
      <Link to="/openvote">Open Vote</Link>
      <Link to="/calendar">Calendar</Link>
  
      </nav>

      <Outlet></Outlet>

      <nav className='bot-nav'>
      <Link to="/contact">Contact</Link>
      <Link to="/about">Create Challenge</Link>

      </nav>
      
    </div>
  )
}

export default Layout