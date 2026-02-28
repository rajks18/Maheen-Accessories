import { ArrowRight, ArrowUpRight } from "lucide-react"

const features = [
  { title: "20+ Years Experience", active: true },
  { title: "Creative Custom Design", active: false },
  { title: "Globally Awarded", active: false },
  { title: "Best Quality With Price", active: false },
]

export function WhyChooseUs() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <p className="text-sm text-accent mb-2">
              <span className="italic">04 //</span> OUR FEATURES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-12">
              Why choose Us
            </h2>

            {/* Features List */}
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 py-4 border-t border-border ${
                    index === features.length - 1 ? "border-b" : ""
                  }`}
                >
                  <ArrowRight className={`h-4 w-4 ${feature.active ? "text-accent" : "text-muted-foreground"}`} />
                  <span className={`text-lg ${feature.active ? "text-accent font-medium" : "text-foreground"}`}>
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Building Image with Card */}
          <div className="relative pb-16">
            {/* Building Image */}
            <div className="aspect-[4/3] rounded-lg overflow-visible relative">
              <img 
                src="/images/factory-building.jpg" 
                alt="Maheen Accessories Production Facility"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Overlay Card - positioned outside image container */}
            <div className="absolute bottom-8 left-0 lg:left-4 w-64 z-10">
              <div className="bg-foreground text-background rounded-lg p-5">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-3">
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="text-accent">
                    <path d="M20 5L5 20L12 27L20 19L28 27L35 20L20 5Z" fill="currentColor" opacity="0.7"/>
                    <path d="M12 27L20 35L28 27L20 19L12 27Z" fill="currentColor"/>
                  </svg>
                  <div>
                    <span className="text-sm font-bold">MAHEEN</span>
                    <span className="block text-xs text-neutral-400">ACCESSORIES <span className="text-accent">ltd.</span></span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  Maheen Accessories Ltd has been serving for 20 years, since its establishment in 2005. They have built a reputation for providing high-quality accessories and exceptional service over the past two decades.
                </p>

                <button className="text-xs text-white flex items-center gap-2 hover:text-accent transition-colors">
                  Read More
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Stats - positioned at bottom right */}
            <div className="absolute bottom-0 right-0 flex gap-2 z-10">
              <div className="bg-background border border-border rounded-lg px-4 py-3 text-center shadow-lg">
                <span className="text-2xl lg:text-3xl font-bold text-foreground">500+</span>
                <p className="text-xs text-muted-foreground">Designs</p>
              </div>
              <div className="bg-cyan-400 rounded-lg px-4 py-3 text-center shadow-lg">
                <span className="text-2xl lg:text-3xl font-bold text-foreground">3000k</span>
                <p className="text-xs text-foreground/80">Order Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
