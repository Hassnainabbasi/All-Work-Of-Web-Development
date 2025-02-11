import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link'
import { auth } from '../../../auth'
import { signOut } from '../../../auth'
import Image from 'next/image'

export default async function Header() {
  const session = await auth()

  return (
    <div className='bg-secondary py-3'>
 <div className='flex container mx-auto justify-between'>
        <h2 className='font-mono font-bold text-xl'>LOGO</h2>
        {session ? (
          <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="border-none bg-transparent m-0"> 
               <Image
      src={session?.user?.image}
      alt="ecommerce"
      className="rounded-full w-10 h-10"
      height={300}
      width={400}
    />
    </MenubarTrigger>
            <MenubarContent>
            <Link href={'/profile'}><MenubarItem>Profile</MenubarItem>
            </Link>
              <MenubarSeparator />
              <Link href={'/appointments'}><MenubarItem>My Appointment</MenubarItem>
              </Link>
               <MenubarSeparator />
              <MenubarItem>Setting</MenubarItem>
              <MenubarSeparator />
              <form
                  action={async () => {
                    "use server";
                    await signOut("google");
                  }}
                >
                  <Button variant={"outline"}>Logout</Button>
                  </form>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
    
        ) : (
        <Link href={'/signin'}>
        <Button variant={"outline"}>Login</Button>
        </Link>
        )}
        </div>
    </div>
  )
}
