// import { Button } from '@/components/ui/button'
// import { DatePicker } from '@/components/ui/DatePicker'
// import { LocalHospital, Male, Payments, PersonOutline, QueryBuilder } from '@mui/icons-material'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { auth } from '../../../../auth'
// import { getSingleRequest } from '@/action/requests'

// export default async function DoctarDetail({params}) {
//   const session = await auth()
//   const { requests } = await getSingleRequest(params.id)
//   console.log('request is connected=>',requests)
//   let doctorInfo = requests
//   return (
//         <div>
//             <Link href={'/doctors'}>
//             <Button className="ml-3" variant={'outline'}>Back</Button>
//             </Link>
            
// <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             <Image
//               alt="ecommerce"
//               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//               src={ doctorInfo.user.picture ||'https://img.freepik.com/premium-photo/confident-anime-woman-doctor-portrait-professional-medical-expert-healthcare-clinic_251136-112394.jpg?semt=ais_hybrid'}
//              height={300}
//              width={400}
//            />
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <h2 className="text-sm title-font text-gray-500 tracking-widest">
                
//               </h2>
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {doctorInfo.user.firstName + " " + doctorInfo.user.lastName}
//               </h1>
//               <div className="flex mb-4">
//                 <span className="flex items-center">
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                   <svg
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                   <span className="text-gray-600 ml-3">{doctorInfo.degree}</span>
//                 </span>
//                 <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//                   <a className="text-gray-500">
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//                     </svg>
//                   </a>
//                   <a className="text-gray-500">
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                     </svg>
//                   </a>
//                   <a className="text-gray-500">
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                     </svg>
//                   </a>
//                 </span>
//               </div>
             
//               <div className="flex justify-between my-3">
//               <div className="flex gap-2 items-center">
//                 <PersonOutline/>
//                 <h1 className="font-semibold">Gender</h1>
//               </div>
//               <h1>
//               {doctorInfo.gender}
//                </h1>
//             </div>
//             <div className="flex justify-between my-3">
//               <div className="flex gap-2 items-center">
//                 <PersonOutline/>
//                 <h1 className="font-semibold">Specialization</h1>
//               </div>
//               <h1>{doctorInfo.specialization}
//               </h1>
//             </div>
//             <div className="flex justify-between my-3">
//               <div className="flex gap-2 items-center">
//                 <LocalHospital />
//                 <h1 className="font-semibold">Hospital</h1>
//               </div>
//               <h1 className="font-semibold">{doctorInfo.hospital}</h1>
//             </div>
//             <div className="flex justify-between my-3">
//               <div className="flex gap-2 items-center">
//                 <QueryBuilder />
//                 <h1 className="font-semibold">Appointment Time</h1>
//               </div>
//               <h1>Apply Future Date</h1>
//             </div>

//             <div className="flex justify-between my-3">
//               <div className="flex gap-2 items-center">
//                 <Payments />
//                 <h1 className="font-semibold">Fees</h1>
//               </div>
//               <h1>{doctorInfo.fees}</h1>
//             </div>
//           <div className='py-4 '>
//            <DatePicker />
//           </div>
//             <Button className={"w-full"}>Book Your Appointment</Button>
          
//             </div>
//           </div>
//         </div>
//       </section>
//         </div>
        
      
//   )
// }import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/DatePicker'
import { LocalHospital, Male, Payments, PersonOutline, QueryBuilder } from '@mui/icons-material'
import { Image } from 'antd'
import Link from 'next/link'
import React from 'react'
import { auth } from '../../../../auth'
import { getSingleRequest } from '@/action/requests'
import { Button } from '@/components/ui/button'

export default async function DoctarDetail({ params }) {
  const session = await auth()
  const { requests } = await getSingleRequest(params.id)
  console.log('request is connected=>', requests)
  let doctorInfo = requests

  return (
    <div className="max-w-7xl mx-auto p-6  bg-white shadow-xl rounded-lg">


      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto px-4 py-6 lg:px-24">
          <div className="lg:w-4/5 mx-auto flex flex-wrap px-5 bg-gray-50 rounded-lg shadow-md">
            {/* Doctor Image */}
            <Image
              alt="Doctor's Profile"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-t-lg lg:rounded-l-lg"
              src={doctorInfo.user.picture || 'https://img.freepik.com/premium-photo/confident-anime-woman-doctor-portrait-professional-medical-expert-healthcare-clinic_251136-112394.jpg?semt=ais_hybrid'}
              height={300}
              width={400}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Doctor Name and Degree */}
              <h1 className="text-gray-900 text-3xl font-semibold mb-1">{doctorInfo.user.firstName + " " + doctorInfo.user.lastName}</h1>
              <div className="flex mb-4 items-center">
                <span className="text-gray-600 text-sm mr-3">Rating:</span>
                <div className="flex space-x-1 text-yellow-500">
                  <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg fill="none" className="w-4 h-4 text-gray-300" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="text-gray-500 ml-3">{doctorInfo.degree}</span>
              </div>

              {/* Details Section */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <PersonOutline />
                    <h1 className="font-semibold text-gray-700">Gender</h1>
                  </div>
                  <p className="text-gray-600">{doctorInfo.gender}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <PersonOutline />
                    <h1 className="font-semibold text-gray-700">Specialization</h1>
                  </div>
                  <p className="text-gray-600">{doctorInfo.specialization}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <LocalHospital />
                    <h1 className="font-semibold text-gray-700">Hospital</h1>
                  </div>
                  <p className="text-gray-600">{doctorInfo.hospital}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <QueryBuilder />
                    <h1 className="font-semibold text-gray-700">Appointment Time</h1>
                  </div>
                  <p className="text-gray-600">Apply Future Date</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Payments />
                    <h1 className="font-semibold text-gray-700">Fees</h1>
                  </div>
                  <p className="text-gray-600">{doctorInfo.fees}</p>
                </div>
              </div>

              {/* Date Picker and Appointment Button */}
              <div className="py-4 mt-6">
                <DatePicker />
              </div>
              <Button className="w-full mt-4 py-3 bg-blue-600 text-white hover:bg-blue-700">Book Your Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
