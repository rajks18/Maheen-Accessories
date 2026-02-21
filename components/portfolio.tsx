import Image from "next/image"
import { ArrowRight } from "lucide-react"

const leftColumnItems = [
  {
    image: "/images/portfolio-1.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-square",
  },
  {
    image: "/images/portfolio-3.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[4/3]",
  },
  {
    image: "/images/portfolio-5.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[4/3]",
  },
  {
    image: "/images/portfolio-7.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[3/2]",
  },
]

const rightColumnItems = [
  {
    image: "/images/portfolio-2.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[4/3]",
  },
  {
    image: "/images/portfolio-4.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[3/4]",
  },
  {
    image: "/images/portfolio-6.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[3/4]",
  },
  {
    image: "/images/portfolio-8.jpg",
    title: "XYZ",
    author: "By Jonathan Wilson",
    aspectRatio: "aspect-[4/3]",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">
            <span className="text-amber-600 italic">06//</span> OUR PORTFOLIO
          </p>
          <h2 className="text-3xl lg:text-4xl text-foreground">
            <span className="font-serif">Maheen Creates</span>{" "}
            <span className="font-serif italic text-neutral-600">All of Your</span>
          </h2>
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground">
            beautiful Products
          </h2>
        </div>

        {/* Two Column Masonry Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="space-y-4 lg:space-y-6">
            {leftColumnItems.map((item, index) => (
              <div key={index} className="group">
                <div className={`${item.aspectRatio} bg-neutral-200 overflow-hidden relative`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 lg:space-y-6">
            {rightColumnItems.map((item, index) => (
              <div key={index} className="group">
                <div className={`${item.aspectRatio} bg-neutral-200 overflow-hidden relative`}>
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 text-sm text-foreground hover:bg-neutral-100 transition-colors">
            See More
            <ArrowRight className="h-4 w-14" />
          </button>
        </div>
      </div>
    </section>
  )
}
