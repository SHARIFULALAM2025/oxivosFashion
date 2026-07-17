'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FaFacebookF, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
 import { FaLinkedin, FaPhone } from 'react-icons/fa6'

import { data, footerColumns } from './payImageData'

const Footer = () => {
    const socialLinks = [
      { icon: FaFacebookF, href: '#', label: 'Facebook' },
      { icon: FaYoutube, href: '#', label: 'YouTube' },
      { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    ]
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-8 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="">
              <div className="flex items-center">
                <Image
                  src="/oxivos.png"
                  width={80}
                  height={32}
                  className="h-8 w-auto sm:h-7 md:h-8 lg:h-9"
                  alt="oxivos fashion logo "
                  priority
                />

                <h2 className="text-sm text-primary font-bold ">
                  <span className="text-foreground">Oxivos</span> Fashion
                </h2>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted max-w-xs">
              Bangladesh s clothing & fashion e-commerce web agency.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  href={href}
                  key={label}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={14}></Icon>
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {item.links.map((items) => (
                  <li key={items.name}>
                    <Link
                      className="text-sm text-muted transition-colors hover:text-primary"
                      href={items.href}
                    >
                      {items.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h1>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <FaEnvelope
                  className="mt-0.5 shrink-0 text-primary"
                  size={14}
                />
                <a
                  href="mailto:oxivosfashion@gmail.com"
                  className="break-all transition-colors hover:text-primary"
                >
                  oxivosfashion@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaPhone className="mt-0.5 shrink-0 text-primary" size={14} />
                <a
                  href="https://wa.me/8801829197321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all transition-colors hover:text-primary"
                >
                  +8801829197321 (whats App)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <IoLocationSharp
                  className="mt-0.5 shrink-0 text-primary"
                  size={14}
                />
                <span>Uttara-Bangladesh Dhaka-1230</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" my-10  h-px w-full bg-gradient-to-r from-transparent via-border to-transparent "></div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 ">
        {/* Left Side: Label */}
        <div className="w-full md:w-auto md:border-r border-border md:pr-6 flex item-center justify-center md:justify-start">
          <span className="whitespace-nowrap text-sm font-semibold text-foreground ">
            Pay With
          </span>
        </div>

        {/* Center Side: Payment Logos Grid */}
        <div className="flex-1 grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-11 gap-3 md:py-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-card  border-border border p-1 rounded-md flex items-center justify-center h-10 w-full transition-transform hover:scale-105"
            >
              <Image
                src={item}
                width={40}
                height={25}
                alt={`Payment Partner ${index}`}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        {/* Right Side: SSLCommerz Verified */}
        <div className="w-full md:w-auto  border-border md:pl-6 flex flex-col items-center justify-center  gap-1">
          <span className="text-[10px] text-muted uppercase tracking-widest">
            Verified By
          </span>
          <div className="bg-card border border-primary/30 p-1 px-3 rounded text-[10px] font-bold text-foreground">
            SSLCOMMERZ
          </div>
        </div>
      </div>
      <div className=" my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent "></div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 md:text-left md:flex-row">
        <p className="text-xs text-muted">
          © Oxivos Fashion. Crafted by Shariful Alam.
        </p>
        <div className="flex items-center gap-6 text-xs font-medium text-foreground">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
