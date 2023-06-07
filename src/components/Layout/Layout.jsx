import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../Layout/Layout.css'


function Layout() {
  return (

    <div>

      <nav className='top-nav'>

        <div className='top-nav-links-div'>
          <Link to="/">Home</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/mychallenges">My Challenges</Link>
          <Link to="/createchallenges">Create Challenge</Link>
          <Link to="/vote">Vote</Link>
          <Link to="/calendar">Calendar</Link>
        </div>



      </nav>
      <div id='main-content'>
        <Outlet></Outlet>
      </div>

      <nav className='bot-nav'>
        <div className='bot-nav-links-div'>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>


      </nav>

    </div>
  )
}

export default Layout