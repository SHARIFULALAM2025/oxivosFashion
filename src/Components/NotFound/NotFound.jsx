'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 py-12 overflow-hidden relative transition-colors duration-300">
      {/* Dynamic Theme Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center">
        {/* Big 404 Number Layout */}
        <div className="relative mb-6 select-none w-full flex items-center justify-center h-48 md:h-64">
          <p className="text-[130px] md:text-[180px] font-black leading-none tracking-tighter text-foreground/5 dark:text-foreground/10 absolute">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://i.ibb.co.com/N65s5jrz/Cjdlfsfjapture-removebg-preview.png"
              alt="Product not found illustration"
              width={400}
              height={300}
              className="h-40 md:h-52 w-auto object-contain drop-shadow-[0_15px_30px_rgba(46,91,255,0.2)] hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Branding Subtitle Divider */}
        <div className="flex items-center gap-3 mb-6 justify-center w-full">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase shrink-0">
            Modern Fashion Store
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
        </div>

        {/* Main Error Messages */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-snug">
          Oops! Product{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Not Found
          </span>
        </h1>

        <p className="text-sm md:text-base text-muted max-w-sm mb-8 leading-relaxed">
          We couldn&apos;t find the specific item or data you are looking for.
          Please search accurately or explore our latest arrivals!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => router.push('/')}
            className="w-full sm:w-auto h-11 px-6 rounded-lg bg-primary text-white font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-primary/20 cursor-pointer"
          >
            Go to Homepage
          </button>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto h-11 px-6 rounded-lg bg-card border border-border text-foreground font-medium text-sm hover:bg-muted/10 active:scale-[0.98] transition-all cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
