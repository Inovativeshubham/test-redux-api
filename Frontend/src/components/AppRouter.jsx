import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ProtectedRoute from './ProtectedRoute'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<>
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        </>} />
      </Routes>
    </div>
  )
}

export default AppRouter
