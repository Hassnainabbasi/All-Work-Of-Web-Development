import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'

function App() {
   return (
<div className='flex justify-around container'>
<BrowserRouter>
<Routes>
  <Route index path='/' element={<Dashboard/>} />
  <Route path='/auth' element={<Auth />}/>
</Routes>
</BrowserRouter>
</div>
  )
}

export default App
