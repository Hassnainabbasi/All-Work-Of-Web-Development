import React from 'react';
import { categories, doctors } from '@/lib/data';
import { Button } from './button';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 
import Image from 'next/image';
import { getRequest } from '@/action/requests';
import CardDoctor from './CardDoctor';

export default async function DoctorSection({ Home }) {
  const get  = await getRequest("accepted");

  const acceptedDoctors = get?.request?.filter(doctor => doctor.status === 'accepted') || [];


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 mx-auto">
        {Home ? (
          <div className='flex justify-between pb-5'>
            <Link href={`/doctors/`}>
              <Button variant={'outline'}>Where Is Doctors ?</Button>
            </Link>
          </div>
        ) : (
          
          <div className='py-10'>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="See All" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cati) => (
                  <SelectItem key={cati} value={cati}>
                    {cati}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        
        <div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">
        {acceptedDoctors?.map((request) => (
          <CardDoctor key={request._id} request={request} isAdmin={false} />
        ))}
      </div>
      </div>
    </section>
  );
}