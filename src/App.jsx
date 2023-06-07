import './App.css'
import './components/Layout/Layout'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Challenges from './components/Challenges/Challenges'
import MyChallenges from './components/MyChallenges/MyChallenges';
import CreateChallenges from './components/CreateChallenges/CreateChallenges'
import Profile from './components/Profile/Profile'
import Vote from './components/Vote/Vote'
import  Calendar  from './components/Calendar/Calendar';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='challenges' element={<Challenges/>}></Route>
          <Route path='mychallenges' element={<MyChallenges/>}></Route>
          <Route path='createchallenges' element={<CreateChallenges/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='vote' element={<Vote/>}></Route>
          <Route path='calendar' element={<Calendar/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='sign-up' element={<SignUp/>}></Route>
    
        
        </Route>
      </Routes>



    </div>
  )
}

export default App
