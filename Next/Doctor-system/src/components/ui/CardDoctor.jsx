// import React from 'react'
// import { 
//     Card ,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from './card'
// import { Briefcase, Clock, GraduationCap, MapPin, Phone, Stethoscope } from 'lucide-react'
// import Image from 'next/image'
// import { Button } from './button'
// import { Money } from '@mui/icons-material'
// export default function CardDoctor({request, isAdmin, onAccept, onReject}) {
//   return (
//     <div>
//     <Card key={request._id}>
//   <CardContent>
//     <CardHeader>
//      <CardDescription>
//       <div className='flex items-center gap-5 mx-auto container'>
//           <Image className='border rounded-full' src={request?.user?.picture || 'Picture is Not Available'} alt="" height={200} width={100} />
//         <h1 className='text-black text-xl font-bold'>{request.user.firstName + " " +request.user.lastName}
//         </h1>    
//         </div>
//               </CardDescription>
//     </CardHeader>
//     <div className="mt-6 space-y-4">
//           <div className="flex items-center gap-2">
//             <Stethoscope className="h-5 w-5 text-gray-500" />
//             <p>
//               <span className="font-semibold">Specialization:</span>{" "}
//               {request.specialization}
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin className="h-5 w-5 text-gray-500" />
//             <p>
//               <span className="font-semibold">Hospital:</span> {request.hospital}
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="h-5 w-5 text-gray-500" />
//             <p>
//               <span className="font-semibold">Contact:</span> {request.number}
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//           <Money className="h-5 w-5 text-gray-500" />
//             <p>
//               <span className="font-semibold">Fees:</span> {request.fees}
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Button>Book Your Appointment</Button>
//           </div>
//         </div>
//   </CardContent>
// </Card>
// </div>
//   )
// }
import React from 'react'
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './card'
import { Briefcase, Clock, GraduationCap, MapPin, Phone, Stethoscope } from 'lucide-react'
import Image from 'next/image'
import { Button } from './button'
import { Money } from '@mui/icons-material'
import { DatePicker } from './DatePicker'
import Link from 'next/link'

export default async function CardDoctor({ request, isAdmin, onAccept, onReject }) {
  return (
    <div className="flex justify-center my-4">
      <Link href={`/doctors/${request._id}`}>
      <Card key={request._id} className="w-full sm:w-72 md:w-80 lg:w-96 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <CardContent>
          {/* Doctor Profile Section */}
          <CardHeader className="flex flex-col items-center">
            <CardDescription className="text-center">
              <div className="flex flex-col items-center gap-3">
                <Image
                  className="border-4 border-gray-300 rounded-full"
                  src={request?.user?.picture || '/default-avatar.png'}
                  alt={`${request.user.firstName} ${request.user.lastName}`}
                  height={120}
                  width={120}
                  priority
                />
                <h1 className="text-lg font-bold text-gray-800">{request.user.firstName} {request.user.lastName}</h1>
                <p className="text-sm text-gray-500">{request.user.title || "Doctor"}</p>
              </div>
            </CardDescription>
          </CardHeader>

          {/* Doctor Info Section */}
          <div className="mt-4 space-y-3 text-gray-700">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              <p><span className="font-semibold">Specialization:</span> {request.specialization}</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              <p><span className="font-semibold">Hospital:</span> {request.hospital}</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-orange-500" />
              <p><span className="font-semibold">Contact:</span> {request.number}</p>
            </div>
            <div className="flex items-center gap-2">
              <Money className="h-5 w-5 text-yellow-500" />
              <p><span className="font-semibold">Fees:</span> {request.fees}</p>
            </div>
          </div>

          {/* Buttons for Booking & Admin Actions */}
          <CardFooter className="mt-4 flex flex-col gap-3">
            <div>
            <DatePicker/>
            <Button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              Book Appointment
            </Button>
            </div>
            
            {isAdmin && (
              <div className="flex gap-2">
                <Button onClick={onAccept} className="w-24 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
                  Accept
                </Button>
                <Button onClick={onReject} className="w-24 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
                  Reject
                </Button>
              </div>
            )}
          </CardFooter>
        </CardContent>
      </Card>
      </Link>
      
    </div>
  )
}
