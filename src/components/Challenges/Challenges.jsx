import React from 'react'
import '../Challenges/Challenges.css'
import ChallengeCard from '../ChallengeCard/ChallengeCard'

function Challenges() {
  return (
    <div className='challenges'>
      <div className='card-row'><ChallengeCard></ChallengeCard></div>
      <div className='card-row'><ChallengeCard></ChallengeCard></div>
      <div className='card-row'><ChallengeCard></ChallengeCard></div>

    </div>
      
  )
}

export default Challenges