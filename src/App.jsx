import './App.css'
import './components/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='challenges' element={<Challenges/>}></Route>
          <Route path='profile' element={<Profile/>}></Route>
        
        </Route>
      </Routes>



    </div>
  )
}

export default App
