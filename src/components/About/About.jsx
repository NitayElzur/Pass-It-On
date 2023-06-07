import React from 'react'
import '../About/About.css'

function About() {
  return (
    <div className='about-container'>
      <h1 id='about-us-title'>About us</h1>

      <div id='about-img-text'>
        <div  id='about-text'><h4>Introducing "Pass It On",
        Our main purpose is to encourage people to do good deeds,
        the deeds can be related to the community,contribution to
        people in need or a contribution to the environment.
        Our site is based on a friendly competition between
        the users which meant to encourage
        them and people around them to pass on good deeds,
        the useres will have a week to complete their challenges,
        if they succeeed, they will chose to which organization
        they want to donate money.</h4></div>
        
      </div>


      <div >
      <img id='about-img-hands' src="https://clipart-library.com/img/2040181.png" alt="" />
        <img id='about-img-heart' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="" />
       
      </div>


    </div>
  )
}

export default About