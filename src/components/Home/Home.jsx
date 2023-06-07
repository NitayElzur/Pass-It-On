import React from 'react'
import ChallengeCard from '../ChallengeCard/ChallengeCard'
import { useState,useEffect } from "react";
import '../../Jsons/challenge.json'
import '../Home/Home.css'

function Home() {

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('users'))?.find(v => v.id == localStorage.getItem('currentUser')))
  }, [])
  return (
    <div id="container">

      <div id="pic-title">

        <img id="main-pic" src='https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg' alt="Subject pic" />
        <div id="titles">
       
          <h1 id="main-title"> {user ? `Hello ${user?.username?.charAt(0).toUpperCase()}${user?.username?.slice(1)}`: 'Hello'}</h1>
          <h1 id="welcome-line">Welcome To Pass It On!</h1>
          <h1 id="main-subtitle">
            Introducing Pass It On,
            Our main purpose is to encourage people to do good deeds,
            the deeds can be related to the community,contribution to
            people in need or a contribution to the environment.
            <br></br><br></br>
            So, what are you waiting for?
          </h1>



        </div>

      </div>

      <div id='challenges-container'>
        <div className='card-div'><ChallengeCard /></div>
        <div className='card-div'><ChallengeCard /></div>
        <div className='card-div'><ChallengeCard /></div>
      </div>


    </div>


  )
}

export default Home