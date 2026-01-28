"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const albums = [
  {
    title: "Customize Button",
    subtitle: "BY MAHEEN ACCESSORIES LIMITED",
    image: "/images/album-buttons.jpg",
  },
  {
    title: "Premium Ribbons",
    subtitle: "BY MAHEEN ACCESSORIES LIMITED",
    image: "/images/album-ribbon.jpg",
  },
  {
    title: "Designer Labels",
    subtitle: "BY MAHEEN ACCESSORIES LIMITED",
    image: "/images/album-tape.jpg",
  },
]

export function PhotoAlbums() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i - 1 + albums.length) % albums.length)
  const next = () => setCurrentIndex((i) => (i + 1) % albums.length)

  const prevIndex = (currentIndex - 1 + albums.length) % albums.length
  const nextIndex = (currentIndex + 1) % albums.length

  return (
    <section id="albums" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-accent mb-2">
            <span className="italic">02 //</span> PHOTO ALBUMS
          </p>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground">
            Collection of photos <span className="italic">All of Our</span>
          </h2>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground">Best Works</h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Background PORTFOLIO text */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
            <span className="text-[8rem] lg:text-[12rem] font-serif text-muted/30 tracking-wider select-none translate-y-1/3">
              PORTFOLIO
            </span>
          </div>

          <div className="flex items-center justify-center">
            {/* Left slide (partial) */}
            <div className="hidden lg:block w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 -mr-8 relative z-0">
              <Image
                src={albums[prevIndex].image || "/placeholder.svg"}
                alt={albums[prevIndex].title}
                fill
                className="object-cover"
              />
            </div>

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="z-20 w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={1} />
              <span className="sr-only">Previous</span>
            </button>

            {/* Current slide */}
            <div className="w-full max-w-lg aspect-[4/3] bg-muted rounded-2xl overflow-hidden relative z-10 mx-4">
              <Image
                src={albums[currentIndex].image || "/placeholder.svg"}
                alt={albums[currentIndex].title}
                fill
                className="object-cover"
              />
              {/* Title overlay */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-medium text-foreground">{albums[currentIndex].title}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{albums[currentIndex].subtitle}</p>
              </div>
              {/* Expand button */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors">
                <ChevronRight className="h-4 w-4 text-accent" />
              </button>
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="z-20 w-10 h-10 flex items-center justify-center text-foreground hover:text-accent transition-colors"
            >
              <ChevronRight className="h-8 w-8" strokeWidth={1} />
              <span className="sr-only">Next</span>
            </button>

            {/* Right slide (partial) */}
            <div className="hidden lg:block w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 -ml-8 relative z-0">
              <Image
                src={albums[nextIndex].image || "/placeholder.svg"}
                alt={albums[nextIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
