import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { auth } from '../../../auth'
import Image from 'next/image'

export default async function Hero() {
  const session = await auth()
  return (
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        
        Har dard ka ilaaj <br></br> har muskil ka hal  
    
      </h1>
      <p className="mb-8 leading-relaxed">
      Hamara Hospital Aapki Sehat Hamari Pehchaan

Aapka swagat hai <br></br> Hamara Hospital aapko Behtareen Sehat ki Sahuliyat Faraham Karta hai
<br></br> Hamara doctor appointment system se aap asani se online appointment book <br></br> kar sakte hain
      </p>
      <div className="flex justify-center gap-5">
        <Link href={'/doctors'}>
        <Button className=' font-serif'>
          Find Your Doctor
        </Button>
        </Link>
        <Link href={session ? `/doctors/apply` : '/signin'}>
        <Button variant={'outline'} className=' font-serif'>
          Apply as a Doctor
        </Button>
        </Link>
      </div>
    </div>
    <div className="w-48  ">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="https://images.unsplash.com/photo-1625563016057-3964c9b5fdb8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     height={400}
     width={300}/>
    </div>
  </div>
</section>

  )
}