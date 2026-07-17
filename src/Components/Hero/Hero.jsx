'use client'
import React, { useCallback, useEffect, useState } from 'react'
import product from '@/app/navigation/hero.json'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
const products = product
const Hero = () => {

  const [current, setCurrent] = useState(0)
  const [paused, setIsPaused] = useState(false)
  const slider = Array.from(
    new Map(products.map((item) => [item.image,item])).values()
    ).slice(0, 5)
    console.log(slider);

  const slideIndex = useCallback((index) => {
    setCurrent(index)
  }, [])
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slider.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused, slider.length])

  return (
    <section
      className="relative  h-[500px] w-full  overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slider?.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out  ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <Image
            src={slide.image}
            alt={slide?.title}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-r from-black/40 via-black/10 to-transparent">
            <div className="relative  z-10 h-full flex items-center px-6  sm:px-12 lg:px-20">
              <div className="max-w-xl">
                <p className="text-xs sm:text-sm font-bold uppercase mb-6 text-foreground tracking-[0.2em]">
                  {slide.title}
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-foreground font-bold">
                  {slide.des}
                </h2>
                <Link
                  href="/product"
                  className={`inline-flex rounded-lg shadow-md items-center gap-2 text-background bg-primary sm:px-6 sm:py-3 px-5 py-2.5 text-sm font-semibold tracking-wide group transition-all duration-700 delay-300 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                  <span className="  pb-0.5">
                    Product Collection
                  </span>
                  <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1"></HiArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-1/2 gap-2">
        {slider.map((_, index) => (
          <button
            onClick={() => slideIndex(index)}
            key={index}
            aria-label={`go to slide ${index + 1}`}
            className={` h-2 rounded-full transition-all duration-300 ${index === current ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero
