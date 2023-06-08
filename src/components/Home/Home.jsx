import React from 'react'
import '../Home/Home.css'
import ChallengeCard from '../ChallengeCard/ChallengeCard'

function Home() {
  let challenges=JSON.parse(localStorage.getItem("challenges"));
  console.log();
  return (
    <div id="container">

      <div id="pic-title">

        <img id="main-pic" src='https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg' alt="Subject pic" />
        <div id="titles">

          <h1 id="main-title">Hello user</h1>
          <h1 id="welcome-line">Welcome To Pass It On!</h1>
          <h1 id="main-subtitle">
            Introducing Pass It On,
            Our main purpose is to encourage people to do good deeds,
            the deeds can be related to the community,contribution to
            people in need or a contribution to the environment.
            <br></br><br></br>
            So,what are you waiting for?
            </h1>



        </div>

      </div>

      <div id='challenges-container'>
      <ChallengeCard value={challenges && challenges[challenges?.length-1]} editable={false}/>
      <ChallengeCard value={challenges && challenges[challenges?.length-2]} editable={false}/>
      <ChallengeCard value={challenges && challenges[challenges?.length-3]} editable={false}/>
      </div>

    </div>


  )
}

export default Home