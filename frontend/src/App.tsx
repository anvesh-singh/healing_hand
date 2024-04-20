import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { SearchBar } from './components/SearchBar'
import { NavBar } from './components/NavBar'
import { Profilecard } from './pages/Profilecard'
import { Appointments } from './pages/Appointments'
import { Rating } from './components/Rating'
<<<<<<< HEAD
import {Report} from './pages/Report'
import {Notepad} from './components/Notepad'
import { Profile } from './pages/Profile'
=======
import { Room } from './pages/Room'
>>>>>>> c73fa4359c4d306adb4f23d30e990611851170c3
function App() {

  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
        <Route path="/u" element={<Notepad/>} />
=======
        <Route path="/xxx" element={<Room/>} />
        <Route path="/u" element={<NavBar/>} />
>>>>>>> c73fa4359c4d306adb4f23d30e990611851170c3
        <Route path="/" element={<SearchBar />} />
        <Route path="/nav" element={<NavBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/rating" element={<Rating/>} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App