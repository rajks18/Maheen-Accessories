"use client";

import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-10">
            Contact us for a great photography session & beautiful captured moments
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-transparent border-b border-border pb-3 focus:outline-none focus:border-violet-500 transition-colors placeholder:text-muted-foreground"
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="w-full bg-transparent border-b border-border pb-3 focus:outline-none focus:border-violet-500 transition-colors placeholder:text-muted-foreground"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-border pb-3 focus:outline-none focus:border-violet-500 transition-colors placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Text"
              rows={4}
              className="w-full bg-transparent border-b border-border pb-3 focus:outline-none focus:border-violet-500 transition-colors placeholder:text-muted-foreground resize-none"
            />
            <div className="pt-4">
              <Button
                type="submit"
                variant="outline"
                className="gap-2 rounded-none border-foreground/20 hover:bg-foreground hover:text-background bg-transparent"
              >
                Send Mail
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-500 mb-4">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Our Mail</h3>
            <p className="text-sm text-muted-foreground mb-2">info@maheenaccessories.com</p>
            <button className="text-xs tracking-widest text-foreground hover:text-violet-500 transition-colors underline underline-offset-4">
              MAIL NOW
            </button>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-500 mb-4">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground mb-2">+8801713856882</p>
            <button className="text-xs tracking-widest text-foreground hover:text-violet-500 transition-colors underline underline-offset-4">
              CALL NOW
            </button>
          </div>

          {/* Address */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-500 mb-4">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Our Address</h3>
            <p className="text-sm text-muted-foreground mb-2">
              House # 428A, Road # 29, Gulshan-1, Dhaka 1212,
              <br />Bangladesh
            </p>
            <button className="text-xs tracking-widest text-foreground hover:text-violet-500 transition-colors underline underline-offset-4">
              VIEW MAP
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Wave Lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-32 opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d={`M0,${50 + i * 4} Q100,${30 + i * 3} 200,${50 + i * 4} T400,${50 + i * 4}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-muted-foreground"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
