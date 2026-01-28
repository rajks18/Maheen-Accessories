"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote: "Superior buttons and exceptional service. Thank you, Maheen Accessories!",
    author: "Mr. Mahabub Hasan",
    role: "Manager Merchandising, Jamuna Denims",
    rating: 5,
  },
  {
    quote: "The quality of ribbons from Maheen is unmatched. Highly recommended for any garment manufacturer.",
    author: "Sarah Johnson",
    role: "Procurement Head, Fashion Corp",
    rating: 5,
  },
  {
    quote: "Reliable partner for all our accessory needs. Their custom designs are exceptional.",
    author: "Ahmed Rahman",
    role: "Director, Textile Industries Ltd",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-xl">
          {/* Testimonial Card */}
          <div className="bg-foreground/10 backdrop-blur-md rounded-xl p-8 border border-white/10">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-sky-blue text-sky-blue" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-white/90 text-lg italic mb-6 leading-relaxed">
              {`"${testimonials[currentIndex].quote}"`}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <span className="text-lg font-bold text-accent">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonials[currentIndex].author}</p>
                  <p className="text-white/60 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="sr-only">Previous</span>
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-accent bg-accent/20 flex items-center justify-center text-accent hover:bg-accent/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span className="sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
