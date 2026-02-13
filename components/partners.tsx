"use client";

import { ArrowUpRight } from "lucide-react";

const partners = [
  {
    name: "H&M",
    logo: (
      <svg viewBox="0 0 100 50" className="h-12 w-auto">
        <text x="39" y="40" className="fill-red-600 text-4xl font-bold" style={{ fontFamily: 'serif' }}>
          H&M
        </text>
      </svg>
    ),
  },
  {
    name: "Maheen Partner",
    logo: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-900">
        <div className="text-center text-[8px] font-bold text-blue-900">
          <div>MAHEEN</div>
          <div>ACCESSORIES</div>
          <div>LTD</div>
        </div>
      </div>
    ),
  },
  {
    name: "M&S",
    logo: (
      <div className="text-center">
        <div className="font-serif text-3xl font-light tracking-wider text-foreground">M&S</div>
        <div className="text-[10px] tracking-widest text-muted-foreground">EST. 1884</div>
      </div>
    ),
  },
];

export function Partners() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-muted-foreground mb-4">
            <span className="text-violet-500">06//</span> OUR PARTNERS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Meet Our <em className="font-serif italic text-violet-500">Working</em>
            <br />
            Partners
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
