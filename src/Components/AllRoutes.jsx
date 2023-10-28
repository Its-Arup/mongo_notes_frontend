import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import CreateNote from './CreateNote'

function AllRoutes() {
  return (
    
    <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/createNote' element={<CreateNote/>}/>
    </Routes>
    
  )
}

export default AllRoutes
