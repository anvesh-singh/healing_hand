import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
// import { Blog } from './pages/Blog'
import { SearchBar } from './components/SearchBar'
import { NavBar } from './components/NavBar'
import { Profilecard } from './pages/Profilecard'
import { Appointments } from './pages/Appointments'
import { Rating } from './components/Rating'
import {Report} from './pages/Report'
import {Notepad} from './components/Notepad'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/u" element={<Notepad/>} />
        <Route path="/" element={<SearchBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profilecard/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/rating" element={<Rating/>} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App