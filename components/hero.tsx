"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Innovative Solutions for Every Need",
    subtitle: "YOUR TRUSTED PARTNER IN QUALITY ACCESSORIES",
    description: "At Maheen Accessories Ltd, we provide top-notch products that meet world-class standards. Our advanced infrastructure and expert team cater to diverse customer needs. Discover our high-quality buttons, ribbons, and bows designed to elevate your creations.",
  },
  {
    title: "Quality That Speaks Excellence",
    subtitle: "CRAFTING PERFECTION SINCE 2005",
    description: "With over 20 years of experience, we deliver premium accessories that define industry standards. Our commitment to quality and innovation makes us the preferred choice for global brands.",
  },
  {
    title: "Global Reach, Local Touch",
    subtitle: "SERVING CUSTOMERS WORLDWIDE",
    description: "From design to delivery, we ensure every product meets international quality benchmarks. Partner with us for accessories that make a difference.",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-white/80 mb-4 uppercase">
            {slides[currentSlide].subtitle}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white leading-tight mb-6 text-balance">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-sky-blue text-foreground hover:bg-sky-blue/90 px-6 py-3 h-auto"
            >
              Book A Call
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 px-6 py-3 h-auto bg-transparent"
            >
              Explore Now
              <ArrowUpRight className="ml-2 h-4 w-17" />
            </Button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>

      {/* Navigation Dots & Arrows */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
              className="text-white text-sm tracking-wider hover:text-white/70 transition-colors"
            >
              PREV
            </button>
            
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? "bg-white border-2 border-white" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                >
                  <span className="sr-only">Slide {index + 1}</span>
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
              className="text-white text-sm tracking-wider hover:text-white/70 transition-colors"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
