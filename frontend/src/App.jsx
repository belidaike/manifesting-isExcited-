import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Books from './pages/Book/Books'
import Add from './pages/Book/Add'
import Update from './pages/Book/Update'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Favorites from './pages/Favorites/Favorites'
import Singles from './pages/Singles/Singles'
import { AuthContext } from './context/AuthContext'
import { Toaster } from "react-hot-toast"

const App = () => {
  const { authUser } = useContext(AuthContext)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/books' element={<Books />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movie/:id' element={<Singles />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div >
  )
}

export default App
