import React, { useEffect, useState } from 'react'
import './CreateChallenges.css'
import ChallengeCardEdit from '../ChallengeCardEdit/ChallengeCardEdit'

function CreateChallenges() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('challenges'))?.slice(0, 3))
  }, [])
  return (
    <>
      <div id='editChallenge'>
        {data &&
          data.map((value, index) => {
            return (
              <ChallengeCardEdit key={index} value={value} />
            )
          })
        }
      </div>
    </>
  )
}
export default CreateChallenges;