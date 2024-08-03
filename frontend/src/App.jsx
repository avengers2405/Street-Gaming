import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import home from './pages/home'
import deleteUser from './pages/deleteUser'
import updateUser from './pages/updateUser'
import showUser from './pages/showUsers'
import createUser from './pages/addRecord'


const App = () => {
  return (
    //returns different different routes for each request
    <Routes>
      <Route path='/' element={<home />} />
      <Route path='/user/add' element={<createUser />} />
      <Route path='/user/remove' element={<deleteUser />} />
      <Route path='/user/update' element={<updateUser />} />
      <Route path='/user/show' element={<showUser />} />
    </Routes>
  )
}

export default App