import { EyeIcon,
  MapPin,
  Phone,
  Clock,
  Briefcase,
  GraduationCap,
  Stethoscope,
 } from 'lucide-react'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Button } from './button'


export default function DoctorDetailSheet({doctor}) {
  return (
    <div>
    <Sheet>
  <SheetTrigger>
  <div className='flex gap-2'>
  <EyeIcon/>
  <button>View Details</button>
  </div>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle >
     <h1 className='text-center'>Doctor Details</h1>
      </SheetTitle>
      <SheetDescription>
      <div className='flex items-center gap-5 mx-auto container'>
          <Image className='border rounded-full' src={doctor?.user?.picture || 'Picture is Not Available'} alt="" height={200} width={100} />
        <h1 className='text-black text-xl font-bold'>{doctor.user.firstName + " " +doctor.user.lastName}
        </h1>    
        </div>
              </SheetDescription>
    </SheetHeader>
    <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Specialization:</span>{" "}
              {doctor.specialization}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Degree:</span> {doctor.degree}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {doctor.experience}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Hospital:</span> {doctor.hospital}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Address:</span> {doctor.address}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Contact:</span> {doctor.number}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-500" />
            <p>
              <span className="font-semibold">Appointment Time:</span>{" "}
              {doctor.appointmentTime}
            </p>
          </div>
          <div>
            <p className="font-semibold">Bio:</p>
            <p className="mt-1">{doctor.bio}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <span className="font-semibold">Fees:</span> ${doctor.fees}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="capitalize">{doctor.status}</span>
            </p>
          </div>
        </div>
  </SheetContent>
</Sheet>
</div>
    
  )
}
