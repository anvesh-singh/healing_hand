//@ts-nocheck
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { SearchBar } from './components/SearchBar'
import { NavBar } from './components/NavBar'
import { Profilecard } from './pages/Profilecard'
import { Appointments } from './pages/Appointments'
import { Rating } from './components/Rating'
import {Report} from './pages/Report'
import {Notepad} from './components/Notepad'
import { Profile } from './pages/Profile'
import { Room } from './pages/Room'
import { Landing } from './pages/Landing'
import {DocProfile} from'./components/DocProfile'
import { Nomatch } from './components/Nomatch'
import { RequireAuth } from './components/RequireAuth'
import { GetReport } from './pages/GetReport'
import { GetAppointment } from './components/GetAppointment'
import { Home } from './pages/Home'
function App() {

  return (
    <div className="w-full h-screen">
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<SearchBar />} />
        <Route path="/nav" element={<NavBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile/:doctor" element={<RequireAuth><DocProfile/></RequireAuth>} />
          <Route path="/appointment/:patienttoken/:doctorid" element={<RequireAuth><Appointments/></RequireAuth>} />
          {/* <Route path="/u" element={<RequireAuth><Notepad/></RequireAuth>} /> */}
        <Route path="/xxx" element={<RequireAuth><Room/></RequireAuth>} />
          <Route path="/userprofile" element={<RequireAuth><Profile/></RequireAuth>}/>
          <Route path="/getreport" element={<RequireAuth><GetReport/></RequireAuth>}/>
          <Route path="/getappointment" element={<RequireAuth><GetAppointment/></RequireAuth>}/>
          <Route path="/report/:patienttoken/:doctorid" element={<RequireAuth><Report/></RequireAuth>}/>
          <Route path="*" element={<Nomatch/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App