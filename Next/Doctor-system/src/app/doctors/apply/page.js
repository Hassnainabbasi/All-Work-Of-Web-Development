import DoctorForm from '@/components/ui/ApplyForm'
import React from 'react'
import { auth } from '../../../../auth'

export default async function ApplyAsDoctor() {
    const session = await auth()
  return (
    <div className='mx-auto container'>
    <h1 className='font-semibold text-xl'>Apply as Doctor in our Platform</h1>
    <p>Apply as Doctor in our Platform</p>

    <DoctorForm session={session}/>
    </div>
  )
}
