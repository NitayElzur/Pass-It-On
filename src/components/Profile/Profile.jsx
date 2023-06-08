import React, { useEffect, useState } from 'react'
import '../../Jsons/users.json'
import '../Profile/Profile.css'

function Profile({ id }) {
  const [data, setData] = useState([]);
  let signedChal;
  let user;
  let completedChal;
  useEffect(() => {
    user = localStorage.getItem('currentUser')
    setData(JSON.parse(localStorage.getItem('users')).find(v => v.id == user))

  }, [])
  console.log(data);
  signedChal = data?.challenges?.filter(element => element.status == "signed")
  completedChal = data?.challenges?.filter(element => element.status == "completed")
  return (
    <div>
      <div > Profile</div>
      <div className='profile_info'>
        <div>
          <img src={data?.picture} style={{width:100, height:100, borderRadius:100}}/>
        </div>
        <div className='profile_score'>
          {data?.grade}
        </div>
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
      </div>

      <div className='challenges_scrollers'>
        <div>
          Your signed to Challenges
          <br />
          <div className='challenges_scroller_signed'>
          {signedChal &&
            signedChal.map((value, index) => {
              return (
                <div className='challenge_info'>
                  <div className='challenge_pic'><img src={value.image} /></div>
                  <div className='challenge_title'>{value.title}</div>
                </div>
              )
            })
          }
          </div>
        </div>
        <div>
          Your Completed Challenges
          <br />
          <div className='challenges_scroller_completed'>
          {
            completedChal && completedChal.map((value, index) => {
              return (
                <div className='challenge_info'>
                  <div className='challenge_pic'><img src={value.image} /></div>
                  <div className='challenge_title'>{value.title}</div>
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