import DoctorSection from '@/components/ui/DoctorSection'
import React from 'react'

export default function page({searchParams}) {
    console.log("searchParams=>", searchParams );
    return (
    <div>
        <DoctorSection/>
    </div>
  )
}
