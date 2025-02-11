import React from 'react'
import { auth } from '../../../../auth'
import { redirect } from 'next/navigation'
import { getRequest } from '@/action/requests'
import RequestSection from '@/components/ui/RequestSection'

export default async function Request({searchParams}) {
  const session = await auth()
  const status = searchParams.status
  const { request } = await getRequest(status); 
  if (!session || session?.user?.role !== 'admin') {
    redirect('/')
    return null
  }


  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-3">{`Doctor's`} Requests</h1>
    <RequestSection status={status} request={request} session={session} />
    </div>
  )
}
