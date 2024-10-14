'use client'
// components
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import ThemeToggler from './ThemeToggler'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className='py-6 dark:bg-transparent sticky top-0 z-30 transition-all bg-white'
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
         <Logo />
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <Nav containerStyles='hidden xl:flex gap-x-6 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )

};

export default Header;