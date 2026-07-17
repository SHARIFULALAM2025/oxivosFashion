'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import route from '@/app/navigation/route.json'
import { LuLogIn } from 'react-icons/lu'
import DarkMode from '../DarkMode/DarkMode'
import Button from '../Button/Button'
const navRoute = route
const Navbar = () => {
  console.log(navRoute)
  return (
    <nav className="flex  justify-between py-2 items-center bg-background">
      <Link href="/" className="">
        <div className="flex items-center">
          <Image
            src="/oxivos.png"
            width={80}
            height={32}
            className="h-8 w-auto sm:h-7 md:h-8 lg:h-9"
            alt="logo image"
            priority
          />

          <h2 className="text-xs text-primary font-bold opacity-100">
            <span className="text-foreground">Oxivos</span> Fashion
          </h2>
        </div>
      </Link>
      <div className="space-x-2 text-xs">
        {navRoute.map((item, index) => (
          <Link key={index} className="text-foreground" href={item.path}>
            {item.Name}
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center gap-2">
        <DarkMode />
        <Button
          className="flex items-center gap-1 text-xs bg-primary text-foreground px-3 py-1.5 rounded-md"
          href="/register"
          iconPosition="right"
          icon={<LuLogIn className="text-base" />}
        >
          Register
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
