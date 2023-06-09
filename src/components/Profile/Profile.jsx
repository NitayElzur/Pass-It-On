import React, { useEffect, useState } from 'react'
import '../../Jsons/users.json'
import '../Profile/Profile.css'
import UploadWidget from '../UploadWidget'

function Profile({ id }) {
  const [data, setData] = useState({});
  const [challenges, setChallenges] = useState([])
  const [signedChal, setSignedChal] = useState([])
  const [completedChal, setCompletedChal] = useState([])

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('users')).find(v => v?.id == localStorage.getItem('currentUser')))
    setChallenges(JSON.parse(localStorage.getItem("challenges")))
  }, [])

  useEffect(() => {
    setSignedChal(challenges?.filter((challenge, i) => challenge.isOpen && data?.challenges?.find(ch => ch?.id == i + 1)?.status !== 'completed'))
    setCompletedChal(challenges?.filter((challenge, i) => data?.challenges?.find(ch => ch?.id == i + 1)?.status == 'completed'))
    localStorage.setItem('users', JSON.stringify(JSON.parse(localStorage.getItem('users')).map(v => {
      if(v?.id == data?.id) {
        return {...data}
      }
      else return v
    })))
  }, [data])

  useEffect(() => {
    setCompletedChal(challenges?.filter((challenge, i) => data?.challenges.find(ch=> ch.id==i+1)?.status=='completed'))
  }, [data])

  function isCompleted(element) {
    if (element?.participants?.find(value => value?.id == user)?.status == "completed") return true
    return false
  }
  return (
    <div>
      <div id='profile-title'>Profile Page</div>
      <div className='profile_info'>
        <div className='pic-contents'>
          <UploadWidget data={data} setData={setData}>
            <img src={data?.picture} style={{ width: 100, height: 100, borderRadius: 100, cursor: 'pointer' }} />
          </UploadWidget>
          <div className='profile_contents'>
            <span className='profile_propertie'>
              Username: {data?.username}
            </span>

            <span className='profile_propertie'>
              Email: {data?.email}
            </span>

            <span className='profile_propertie'>
              Phone: {data?.phone}
            </span>
          </div>
          <div className='profile_score'>
            User Score: {data?.grade}
          </div>

        </div>

      </div>

      <div className='challenges_scrollers'>
        <div className='current-challenges-div'>
          <h6 className='current-challenges-title'>Your signed to Challenges</h6>
          <br />
          <div className='challenges_scroller_signed'>
            {signedChal &&
              signedChal.map((value, index) => {
                return (
                  <div key={index} className='challenge_info'>
                    <div className='challenge_title'>{value?.title}</div>
                    <div><img className='challenge-pic' src={value?.image} /></div>

                  </div>
                )
              })
            }
          </div>
        </div>
        <div id='your-completed-challenges'>

          <h6 className='current-challenges-title'>Your Completed Challenges</h6>
          <br />
          <div className='challenges_scroller_completed'>
            {
              completedChal && completedChal.map((value, index) => {
                return (
                  <div key={index} className='challenge_info'>
                    <div className='challenge_title'>{value.title}</div>
                    <div><img id='passed-challenges' src={value.image} /></div>

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile