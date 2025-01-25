import React from 'react'
import Login from './Components/Login/LoginPage'
import Signup from './Components/Signup/Signup'
import Home from './Components/Home/Home'
import{Navigate, Route, Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      <Toaster/>

    </div>
  )
}

export default App;


