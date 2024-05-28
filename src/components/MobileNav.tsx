import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react"

import Nav from "./Nav";
import Logo from "./Logo";


const MobileNav = () => {
  return ( 
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-betweeb h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              underlineStyles=""
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;