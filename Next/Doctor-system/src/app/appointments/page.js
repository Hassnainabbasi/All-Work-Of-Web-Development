// import { columns } from '@/components/ui/Appointment/columns'
// import { AppointmentTable } from '@/components/ui/Appointment/data-table'
// import { appointments } from '@/lib/data'
import { columns } from '@/components/Appointements/column'
import { AppointmentTable } from '@/components/Appointements/data-table'
import { appointments } from '@/lib/data'
import React from 'react'

export default function myAppointments() {
  return (
    <div className='container mx-auto'>
      <div className='py-20'>
      <AppointmentTable columns={columns} data={appointments}/>
      </div>
        </div>
  )
}
