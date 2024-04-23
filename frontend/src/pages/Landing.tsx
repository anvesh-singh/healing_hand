import {Link} from'react-router-dom'
export const Landing =()=>{
return (
  <div>
    <div> <Link to={'/'}>Home</Link></div>
    <div> <Link to={'/profile'}>About</Link></div>
   <div> <Link to={'/signup'}>signup</Link></div>
    <div> <Link to={'/signin'}>signin</Link></div>
  </div>
)  
}