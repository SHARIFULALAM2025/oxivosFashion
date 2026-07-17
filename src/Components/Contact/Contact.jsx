'use client'
import React, { useState } from 'react'
import { BiChevronDown, BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted Data:', formData)
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8 font-sans">
      {/* Page Title */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase">
          Contact Us
        </h1>
        <div className="h-1 w-12 bg-primary mx-auto mt-2 rounded"></div>
      </div>

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Let's build your store
            </h2>
            <p className="text-sm sm:text-base text-muted max-w-md leading-relaxed">
              Tell us about your clothing business. We'll get back to you within
              24 hours.
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-md w-full">
            {/* Email Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/40 hover:border-border transition-all">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <BiMailSend size={20} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] font-bold tracking-wider text-muted uppercase">
                  Email
                </span>
                <a
                  href="mailto:oxivosfashion@gmail.com"
                  className="text-sm font-medium hover:text-primary transition truncate"
                >
                  oxivosfashion@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/40 hover:border-border transition-all">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <BiPhone size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider text-muted uppercase">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/8801829197321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition"
                >
                  +880 1829-197321
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/40 hover:border-border transition-all">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <BiMapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider text-muted uppercase">
                  Location
                </span>
                <span className="text-sm font-medium">
                  Uttara, Dhaka-1230, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-xl max-w-lg w-full justify-self-center lg:justify-self-end">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Start your project
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-wider text-muted uppercase">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="Ayesha Rahman"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-11 px-4 rounded-lg bg-background border border-border/80 text-sm focus:outline-none focus:border-primary transition text-foreground"
              />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-wider text-muted uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ayesha@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border/80 text-sm focus:outline-none focus:border-primary transition text-foreground"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold tracking-wider text-muted uppercase">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border/80 text-sm focus:outline-none focus:border-primary transition text-foreground"
                />
              </div>
            </div>

            {/* Dropdown Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-wider text-muted uppercase">
                Package Interest
              </label>
              <div className="relative">
                <select
                  value={formData.serviceInterest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serviceInterest: e.target.value,
                    })
                  }
                  className="w-full h-11 pl-4 pr-10 rounded-lg bg-background border border-border/80 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer transition text-foreground"
                >
                  <option value="" disabled>
                    Select a package...
                  </option>
                  <option value="basic">E-commerce Starter Pack</option>
                  <option value="premium">Modern Fashion Brand Suite</option>
                  <option value="custom">Custom Development</option>
                </select>
                <BiChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                  size={18}
                />
              </div>
            </div>

            {/* Textarea Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold tracking-wider text-muted uppercase">
                Tell us about your business *
              </label>
              <textarea
                required
                rows={4}
                placeholder="আমার একটি clothing business আছে। Facebook page-এ ৩০k followers আছে। Modern Fashion Store স্টাইলে একটি প্রিমিয়াম ওয়েবসাইট বানাতে চাই..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-4 rounded-lg bg-background border border-border/80 text-sm focus:outline-none focus:border-primary transition resize-none leading-relaxed text-foreground"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 mt-2 rounded-lg bg-primary text-white font-medium text-sm hover:opacity-95 active:scale-[0.99] transition-all shadow-md shadow-primary/20 cursor-pointer"
            >
              Send Message
            </button>

            {/* Footer Note */}
            <p className="text-center text-[11px] text-muted tracking-wide mt-1">
              We reply within 24 hours • No spam ever
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
