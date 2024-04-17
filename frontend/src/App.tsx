import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
// import { Blog } from './pages/Blog'
import { SearchBar } from './components/SearchBar'
import { NavBar } from './components/NavBar'
import { Profile } from './pages/Profile'
import { Appointments } from './pages/Appointments'
import { Rating } from './components/Rating'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/u" element={<NavBar/>} />
        <Route path="/" element={<SearchBar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/rating" element={<Rating/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App