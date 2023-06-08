import React, { useEffect, useState } from 'react'
import './CreateChallenges.css'
import ChallengeCardEdit from '../ChallengeCardEdit/ChallengeCardEdit'

function CreateChallenges() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('challenges')));
  }, [])
  return (
    <>
      <div id='editChallenge'>
        <button onClick={() => {
          const temp = data;
          temp.push({
            id: data.length + 1,
            title: '',
            picture: '',
            desc: '',
            isOpen: true,
            "start-date": '',
            "end-date": '',
            participants: []
          })
          setData([...temp])
          localStorage.setItem('challenges', JSON.stringify(data))
        }}>Add Challenge</button>
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