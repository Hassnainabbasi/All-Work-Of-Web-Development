import React from 'react'
import Login from './Login'
import Signup from './Signup'

export default function Auth() {
  return (
    <div className='flex justify-around container'>
        <Signup />
        <Login />
    </div>
  )
}
