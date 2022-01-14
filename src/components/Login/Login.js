import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="criar" element={<LoginCreate/>}/>
        <Route path="/" element={<LoginPasswordLost/>}/>
        <Route path="/" element={<LoginPasswordReset/>}/>

      </Routes>
    </div>
  )
}

export default Login
