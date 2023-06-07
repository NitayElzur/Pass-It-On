import { useEffect, useState } from 'react'
import '../Profile/Profile.css'

function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('users'))?.find(v => v.id == localStorage.getItem('currentUser')))
  }, [])
  console.log(user);
  return (
    <div>
      {`Welcome ${user?.username?.charAt(0).toUpperCase()}${user?.username?.slice(1)}`}
    </div>
  )
}

export default Profile