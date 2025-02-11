"use client"
// import React, { useState } from 'react'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from './card'
// import { ClockIcon, HomeIcon, PlusIcon, CheckIcon, XIcon } from 'lucide-react'
// import DoctorDetailSheet from './DoctorDetailSheet'
// import { Button } from './button'
// import Link from 'next/link'
// import Image from 'next/image'
// import { revalidatePath } from 'next/cache'
// export default function RequestSection({request,status,session}) {
//   const [jldi,setjldi] = useState(false)
//     const onAccept = async (requestId) => {
//       try {
//         const response = await fetch('/api/request', {
//           method: 'PUT',
//           body: JSON.stringify({
//             id: requestId,
//             status: 'accepted',
//           }),
//         });
//         const result = await response.json();
//         if (result.error) {
//           console.log("Error accepting request:", result.msg);
//         } else {
//           console.log("Request accepted:", result.request);
//           // State ko update karo ya data ko dobara fetch karo
//           // For example, refresh the list of requests or update state
//           // setRequest(updatedRequests); // This should be your local state update
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
    
//     const onReject = async (requestId) => {
//       try {
//         const response = await fetch('/api/request', {
//           method: 'PUT',
//           body: JSON.stringify({
//             id: requestId,
//             status: 'rejected',
//           }),
//         });
    
//         const result = await response.json();
//         if (result.error) {
//           console.log("Error rejecting request:", result.msg);
//         } else {
//           console.log("Request rejected:", result.request);
//           // State ko update karo ya data ko dobara fetch karo
//           // For example, refresh the list of requests or update state
//           // setRequest(updatedRequests); // This should be your local state update
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
    
    
//          console.log('session=>is' ,request)
//     return (
//     <div className="container mx-auto">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//       {request?.map((requests) => {
  
//         return (
//           <Card key={requests._id}>
//             <CardHeader className="flex flex-row items-center space-x-2">
//               <Image
//                 src={requests?.user?.picture}
//               alt="ecommerce"
//                 className="rounded-full w-12 h-12"
//                 height={300}
//                 width={400}
//               />
//               <CardTitle><div>
//                 <h1>{requests?.user?.lastName}</h1>
//                 </div></CardTitle>
//               <CardDescription className="font-bold text-center">{requests?.status}</CardDescription>
//             </CardHeader>

//             <CardContent>
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <HomeIcon />
//                     <span className="font-semibold">Gender</span>
//                   </div>
//                   <span>{requests?.gender}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <PlusIcon className="h-4 w-4" />
//                     <span className="font-semibold">Hospital</span>
//                   </div>
//                   <span>{requests?.hospital}</span>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <ClockIcon className="h-4 w-4" />
//                     <span className="font-semibold">Appointment Time</span>
//                   </div>
//                   <span>{requests?.appointmentTime}</span>
//                 </div>
//               </div>
//             </CardContent>

//             <CardFooter className="justify-between">
//               <DoctorDetailSheet doctor={requests} />
//               {session?.user?.role === 'admin' ? (
//                 <div>
//                   {requests.status === 'rejected' ? (
//                     <Button
//                       size="icon"
//                       variant="outline"
//                       className="bg-red-50 hover:bg-red-100 text-red-600"
//                     >
//                       <XIcon className="h-4 w-4" />
//                       <span className="sr-only">Rejected doctor request</span>
//                     </Button>
//                   ) : requests.status === 'accepted' ? (
//                     <Button
//                       size="icon"
//                       variant="outline"
//                       className="bg-green-50 hover:bg-green-100 text-green-600"
//                     >
//                       <CheckIcon className="h-4 w-4" />
//                       <span className="sr-only">Accepted doctor request</span>
//                     </Button>
//                   ) : (
//                     <div className="space-x-2">
//                       <Button
//                         size="icon"
//                         variant="outline"
//                         className="bg-green-50 hover:bg-green-100 text-green-600"
//                         onClick={() => onAccept(requests._id)}
//                       >
//                         <CheckIcon className="h-4 w-4" />
//                         <span className="sr-only">Accept doctor request</span>
//                       </Button>
//                       <Button
//                         size="icon"
//                         variant="outline"
//                         className="bg-red-50 hover:bg-red-100 text-red-600"
//                         onClick={() => onReject(requests._id)}
//                       >
//                         <XIcon className="h-4 w-4" />
//                         <span className="sr-only">Reject doctor request</span>
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link href={`/doctors/${requests._id}`}>
//                   <Button>Book Appointment</Button>
//                 </Link>
//               )}
//             </CardFooter>
//           </Card>
//         )
//       })}
//     </div>
//   </div>
// )
// }
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle  } from './card'
import { ClockIcon, HomeIcon, PlusIcon, CheckIcon, XIcon } from 'lucide-react'
import DoctorDetailSheet from './DoctorDetailSheet'
import { Button } from './button'
import Link from 'next/link'
import Image from 'next/image'
// Sample component to manage requests state
export default function RequestSection({ request, session }) {
  const [requests, setRequests] = useState(request);

  const onAccept = async (requestId) => {
    try {
      // Backend ko PUT request bhej rahe hain status update ke liye
      const response = await fetch('/api/request', {
        method: 'PUT',
        body: JSON.stringify({
          id: requestId,
          status: 'accepted',
        }),
      });

      const result = await response.json();

      // Agar response mein error nahi hai toh requests ko update karenge
      if (!result.error) {
        // Local state ko update karke turant status change karenge
        setRequests((prevRequests) =>
          prevRequests.map((req) =>
            req._id === requestId ? { ...req, status: 'accepted' } : req
          )
        );
      } else {
        console.log("Request accept karte waqt error:", result.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onReject = async (requestId) => {
    try {
      const response = await fetch('/api/requests', {
        method: 'PUT',
        body: JSON.stringify({
          id: requestId,
          status: 'rejected',
        }),
      });

      const result = await response.json();

      if (!result.error) {
        setRequests((prevRequests) =>
          prevRequests.map((req) =>
            req._id === requestId ? { ...req, status: 'rejected' } : req
          )
        );
      } else {
        console.log("Request reject karte waqt error:", result.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {requests?.map((req) => (
          <Card key={req._id}>
            <CardHeader className="flex flex-row items-center space-x-2">
              <Image
                src={req?.user?.picture}
                alt="ecommerce"
                className="rounded-full w-12 h-12"
                height={300}
                width={400}
              />
              <CardTitle>{req?.user?.lastName}</CardTitle>
              <CardDescription className="font-bold text-center">{req?.status}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <HomeIcon />
                    <span className="font-semibold">Gender</span>
                  </div>
                  <span>{req?.gender}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <PlusIcon className="h-4 w-4" />
                    <span className="font-semibold">Hospital</span>
                  </div>
                  <span>{req?.hospital}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-4 w-4" />
                    <span className="font-semibold">Appointment Time</span>
                  </div>
                  <span>{req?.appointmentTime}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-between">
              {session?.user?.role === 'admin' ? (
                <div>
                  {req.status === 'rejected' ? (
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-red-50 hover:bg-red-100 text-red-600"
                    >
                      <XIcon className="h-4 w-4" />
                      <span className="sr-only">Rejected doctor request</span>
                    </Button>
                  ) : req.status === 'accepted' ? (
                    <Button
                      size="icon"
                      variant="outline"
                      className="bg-green-50 hover:bg-green-100 text-green-600"
                    >
                      <CheckIcon className="h-4 w-4" />
                      <span className="sr-only">Accepted doctor request</span>
                    </Button>
                  ) : (
                    <div className="space-x-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="bg-green-50 hover:bg-green-100 text-green-600"
                        onClick={() => onAccept(req._id)}
                      >
                        <CheckIcon className="h-4 w-4" />
                        <span className="sr-only">Accept doctor request</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="bg-red-50 hover:bg-red-100 text-red-600"
                        onClick={() => onReject(req._id)}
                      >
                        <XIcon className="h-4 w-4" />
                        <span className="sr-only">Reject doctor request</span>
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={`/doctors/${req._id}`}>
                  <Button>Book Appointment</Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
