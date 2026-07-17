'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { HiOutlineEye } from 'react-icons/hi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
//import { HiOutlineHeart } from 'react-icons/hi'

const Card = ({ index, item, discount, oldPrice }) => {
    console.log(item);
    const router = useRouter()
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-card rounded-md border border-border overflow-hidden sm:mb-4 mb-4">
        <span className="absolute top-2 left-2 sm:top-2 sm:left-2 z-10 bg-accent text-foreground text-[10px] sm:text-xs font-semibold px-2 py-2 rounded">
          {discount}%
        </span>

        <Image
          className="object-cover  group-hover:scale-105 transition-transform duration-500"
          src={Array.isArray(item.image) ? item.image[0] : item.image}
          alt={item.category}
          fill
          sizes="(max-w:640px) 50vw,(max-w:1024px),33vw,25vw "
        />
        <div className="absolute  top-3 right-2 flex-col flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/product/${item.id}`)
            }}
            aria-label="View details"
            className="flex items-center justify-center h-9 w-9 rounded-full bg-card text-foreground shadow-sm hover:bg-primary hover:text-background transition-colors"
          >
            <HiOutlineEye className="text-base" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              router.push(`/product/${item.id}`)
            }}
            aria-label="Add to  Cart"
            className="flex items-center justify-center h-9 w-9 rounded-full bg-card text-foreground shadow-sm hover:bg-primary hover:text-background transition-colors"
          >
            <HiOutlineShoppingBag className="text-base" />
          </button>
          {/* <button
            type="button"
            onClick={(e) => e.preventDefault()}
            aria-label="Add to  wishlist"
            className="flex items-center justify-center h-9 w-9 rounded-full bg-card text-foreground shadow-sm hover:bg-primary hover:text-background transition-colors"
          >
            <HiOutlineHeart className="text-base" />
          </button> */}
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-1.5">
        <FaStar className="text-accent text-sx" />
        <span className="text-sx text-muted ">
          {item.rating}
        </span>
      </div>
      <h1 className="text-sm text-foreground  mb-1.5 line-clamp-1">
        {item.name}
      </h1>
      <div className="flex items-center gap-2">
        <span className="text-xs sm:text-sm line-through text-muted">
          ${oldPrice}
        </span>
        <span className="font-semibold text-foreground sm:text-base text-sm">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default Card
