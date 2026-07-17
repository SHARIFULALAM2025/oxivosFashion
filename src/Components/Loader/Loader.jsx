'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Loader = ({ children }) => {
  const [Loading, setLoading] = useState(true)
  const [show, setShow] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(time)
  }, [])
  useEffect(() => {
    if (!Loading) {
      const removeTime = setTimeout(() => {
        setShow(false)
      }, 700)
      return () => clearTimeout(removeTime)
    }
  }, [Loading])
  return (
    <>
      {show && (
        <div className="">
          <div
            className={`fixed inset-0 z-999 flex items-center justify-center gap-2  bg-[#0B1330] transition-opacity duration-700 ${Loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="relative  flex items-center justify-center h-26 w-26 sm:h-28 smw-28 ">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full animate-spin"
                style={{ animationDuration: '1.2s' }}
              >
                <circle
                  cx={50}
                  cy={50}
                  r={45}
                  fill="none"
                  stroke="#DBEAFE"
                  strokeWidth={6}
                />
                <circle
                  cx={50}
                  cy={50}
                  r={45}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth={6}
                  strokeDasharray="70 212"
                  strokeLinecap="round"
                />
              </svg>

              <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden flex items-center justify-center bg-[#0B1330]  ">
                <Image
                  src="/oxivos.png"
                  width={56}
                  height={56}
                  className="object-contain"
                  alt="logo image"
                  priority
                />
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm sm:text-base tracking-wide text-blue-100/80">
              <span className="">Loading</span>
              <span className="flex gap-0.5">
                <span className=" animate-bounce [animation-delay:-0.3s]">
                  .
                </span>
                <span className=" animate-bounce [animation-delay:-0.15s]">
                  .
                </span>
                <span className=" animate-bounce">.</span>
              </span>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  )
}

export default Loader
