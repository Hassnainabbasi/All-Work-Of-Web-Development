import React from 'react'
import Signup from './Signup'
import Login from './Login'

export default function Auth() {
  return (
    <div className='flex justify-evenly'>
     <Signup />
     <Login />
    </div>
  )
}
