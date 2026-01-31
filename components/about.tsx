import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-12">
          <div>
            <p className="text-sm text-accent mb-2">
              <span className="italic">03 //</span> ABOUT COMPANY
            </p>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground">
              Maheen Creates <span className="italic">What You need</span>
            </h2>
            <p className="text-2xl lg:text-2xl text-muted-foreground mt-2">
              precision, passion, and a touch of creativity.
            </p>
          </div>
          <Button variant="outline" className="self-start bg-transparent border-foreground text-foreground hover:bg-muted">
            Explore Now
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative pb-12">
            <div 
              className="aspect-[3/4] lg:aspect-[4/5] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('/images/hero-bg.jpg')",
              }}
            />
            {/* Floating CTA Button */}
            <div className="absolute -bottom-4 right-0 lg:-right-8 translate-x-1/4">
              <button className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white hover:scale-105 transition-transform shadow-xl">
                <span className="text-sm font-medium flex items-center gap-1">
                  Explore Us
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div className="pt-8 lg:pt-24">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold text-foreground tracking-wide">ABOUT MAHEEN</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            <p className="text-muted-foreground mb-6">
              Crafting Excellence | Elevating Creations | Defining Style
            </p>
            
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>
                At Maheen Accessories Ltd, we are committed to providing top-notch products that meet world-class standards. With state-of-the-art infrastructure and an expert management team, we cater to the growing and diversified demands of our customers. Discover our range of high-quality buttons, ribbons, and bows designed to elevate your creations.
              </p>
              <p>
                These elements work together to create a strong first impression and convey the core message of your brand. Let me know if you need any adjustments or additional content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
