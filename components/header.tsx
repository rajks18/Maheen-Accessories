"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navItems = [
  { name: "HOME", href: "#" },
  { name: "ABOUT US", href: "#about" },
  { name: "SUSTAINABILITY", href: "#sustainability" },
  { name: "PRODUCTS", href: "#products" },
  { name: "POLICIES", href: "#policies" },
  { name: "PRODUCTION FACILITIES", href: "#facilities" },
  { name: "CONTACT", href: "#contact" },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-accent">
                <path d="M20 5L5 20L12 27L20 19L28 27L35 20L20 5Z" fill="currentColor" opacity="0.7"/>
                <path d="M12 27L20 35L28 27L20 19L12 27Z" fill="currentColor"/>
              </svg>
              <div className="ml-2">
                <span className="text-lg font-bold tracking-tight text-foreground">MAHEEN</span>
                <span className="block text-xs tracking-widest text-muted-foreground">ACCESSORIES <span className="text-accent">ltd.</span></span>
              </div>
            </div>
          </Link>

          {/* Email - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground border-l border-r border-border px-6">
            <Mail className="h-4 w-4" />
            <span>info@maheenaccessories.com</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-foreground hover:text-accent transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden text-foreground">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pb-4 border-b border-border">
                    <Mail className="h-4 w-4" />
                    <span>info@maheenaccessories.com</span>
                  </div>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4">
          <div className="container mx-auto flex items-center gap-4">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
            />
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
