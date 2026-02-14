import React from "react"
export function Policies() {
  return (
    <section id="policies" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-12">
          <div>
            <p className="text-sm text-accent mb-2">
              <span className="italic">05 //</span> POLICIES
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground">
              Our Smart
            </h2>
            <h2 className="text-4xl lg:text-3xl font-serif italic text-accent">
              Policies
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm lg:text-right">
            {"we're deeply passionate"} <strong className="text-foreground">catch your lovely memories in cameras</strong> and Convey your love for every moment of life as a whole.
          </p>
        </div>

        {/* First Row - 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {/* Card 01 */}
          <PolicyCard
            number="01"
            title="Occupational Health and Safety Policy"
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="6" width="24" height="32" rx="2" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M12 14h16M12 20h16M12 26h10" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="30" cy="32" r="10" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M26 32l3 3 6-6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          {/* Card 02 */}
          <PolicyCard
            number="02"
            title="Product Safety and Quality Policy"
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 20L24 12L36 20V36L24 44L12 36V20Z" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M12 20L24 28L36 20" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M24 28V44" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M24 12V20" stroke="#1a1a1a" strokeWidth="2"/>
                <circle cx="24" cy="8" r="4" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="2"/>
                <path d="M22 8l2 2 3-3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
          
          {/* Card 03 */}
          <PolicyCard
            number="03"
            title="Environmental Policy"
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 8L8 20V40H40V20L24 8Z" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M24 20V36" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M16 28L24 20L32 28" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M18 36L24 28L30 36" fill="#c4b5fd"/>
                <path d="M18 36L24 28L30 36" stroke="#7c3aed" strokeWidth="2"/>
              </svg>
            }
          />
          
          {/* Card 04 */}
          <PolicyCard
            number="04"
            title="Social Compliance Policy"
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="28" rx="2" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M8 20h32" stroke="#1a1a1a" strokeWidth="2"/>
                <rect x="14" y="8" width="8" height="8" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="2"/>
                <rect x="26" y="8" width="8" height="8" fill="#7c3aed" stroke="#1a1a1a" strokeWidth="2"/>
                <circle cx="18" cy="30" r="4" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <circle cx="30" cy="30" r="4" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M22 30h4" stroke="#1a1a1a" strokeWidth="2"/>
              </svg>
            }
          />
        </div>

        {/* Second Row - 2 cards aligned left */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Card 05 */}
          <PolicyCard
            number="05"
            title="Workplace Harassment Policy"
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="20" cy="20" r="8" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <circle cx="28" cy="28" r="8" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M32 16l6 6M38 16l-6 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 24l-4 4" stroke="#c4b5fd" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />
          
          {/* Card 06 */}
          <PolicyCard
            number="06"
            title="Chemical Use Policy"
            icon={
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M18 8h12v8l6 20a4 4 0 01-4 4H16a4 4 0 01-4-4l6-20V8z" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M18 8h12" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="28" r="6" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="28" r="3" fill="#7c3aed"/>
                <path d="M20 20h8" stroke="#1a1a1a" strokeWidth="1.5"/>
              </svg>
            }
          />
          
          {/* Empty placeholders for grid alignment */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function PolicyCard({ number, title, icon }: { number: string; title: string; icon: React.ReactNode }) {
  return (
    <div className="bg-neutral-200 p-6 pt-8 hover:shadow-lg transition-shadow group relative min-h-[260px] flex flex-col">
      {/* Dashed corner decoration - L shape */}
      <div className="absolute top-3 left-3">
        <div className="w-12 border-t-2 border-dashed border-neutral-400" />
        <div className="h-12 border-l-2 border-dashed border-neutral-400" />
      </div>

      {/* Icon */}
      <div className="mb-auto pl-2">
        {icon}
      </div>

      {/* Number & Title at bottom */}
      <div className="mt-auto pt-6">
        <p className="text-sm text-neutral-500 mb-2">{number}</p>
        <h3 className="text-base font-bold text-foreground leading-tight">
          {title}
        </h3>
      </div>
    </div>
  )
}
