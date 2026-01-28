import Image from "next/image"

const services = [
  {
    number: "01",
    title: "Button Manufacturing",
    image: "/images/service-button.jpg",
  },
  {
    number: "02",
    title: "Ribbon Manufacturing",
    image: "/images/service-ribbon.jpg",
  },
  {
    number: "03",
    title: "Bow Manufacturing",
    image: "/images/service-bow.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative wave lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          {[...Array(20)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${50 + i * 10} Q100 ${30 + i * 10} 200 ${50 + i * 10} T400 ${50 + i * 10}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground"
            />
          ))}
        </svg>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          {[...Array(20)].map((_, i) => (
            <path
              key={i}
              d={`M0 ${50 + i * 10} Q100 ${70 + i * 10} 200 ${50 + i * 10} T400 ${50 + i * 10}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-16">
          <div>
            <p className="text-sm text-accent mb-2">
              <span className="italic">01 //</span> SERVICES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground">
              Our Core<br />Services
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm lg:text-base lg:text-right">
            We specialize in developing products that meet <strong className="text-foreground">world-class standards,</strong> ensuring every detail is perfect to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.number} className="group">
              <div className="bg-muted rounded-2xl aspect-square overflow-hidden relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-3xl lg:text-4xl font-light mb-1">{service.number}</p>
                  <h3 className="text-lg font-medium">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
