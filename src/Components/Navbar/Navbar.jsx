'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import route from '@/app/navigation/route.json'
import { LuLogIn } from 'react-icons/lu'
import DarkMode from '../DarkMode/DarkMode'
import Button from '../Button/Button'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useCart } from '../Context/CartContext'

const navRoute = route
const Navbar = () => {
  const { totalItem } = useCart()


  return (
    <nav className="flex  justify-between border-b py-2 items-center bg-background">
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
      <div className="space-x-2 font-bold text-xs">
        {navRoute.map((item, index) => (
          <Link key={index} className="text-foreground" href={item.path}>
            {item.Name}
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center gap-2">
        <DarkMode />
        <Link
          href="/cart"
          aria-label=" view cart"
          className="relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-card transition-colors text-foreground"
        >
          <HiOutlineShoppingBag className="text-lg" />
          {totalItem > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full bg-primary text-background text-[10px] font-semibold">
              {totalItem}
            </span>
          )}
        </Link>
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
