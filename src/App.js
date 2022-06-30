import React from 'react'
import { Navigate, Route, Routes} from 'react-router-dom'
import LandingPage from './component/LandingPage';
import Profile from './component/Profile';
import Signin from './component/Signin'
import Signupp from './component/Signupp';
import Signup from './component/Signup';

function App() {
  const token = localStorage.token
  return (
    <>
    <Routes>
      <Route path='/' element={token?<LandingPage/>:<Navigate to ='/signin'/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/profile' element={token?<Profile/>:<Navigate to='/signin'/>}></Route>
      {/* <Route path='/profile' element={<Pro}></Route> */}
      <Route path='/signups' element={<Signupp/>}></Route>
      
    </Routes>
    </>
  );
}

export default App;