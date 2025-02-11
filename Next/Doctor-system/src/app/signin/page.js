
import { Button } from '@/components/ui/button'
import React from 'react'
import { redirect } from 'next/navigation'
import { auth, signIn } from '../../../auth'

export default async function Signin() {
  const session = await auth()
  if (session) {
    redirect('/') 
  }

  return (
   <div className='min-h-screen mx-auto container flex justify-center items-center'>
     <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <div className='flex flex-col gap-10 justify-center h-screen items-center'>
  <h1 className='text-3xl'>You are Not Logged In</h1>

   <Button className="className=border border-black rounded-lg w-52">
    Continue With Google
   </Button>
   </div>

       </form>
   </div>
  )
}