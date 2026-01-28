"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    date: "25 SEP 2023",
    title: "Maheen Accessories participation at GAPEXPO, ICCB Dhaka.",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    date: "22 SEP 2023",
    title: "New year 2024 celebration at Maheen Accessories",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    date: "22 SEP 2023",
    title: "New year 2024 celebration at Maheen Accessories",
    image: "/images/blog-3.jpg",
  },
];

export function Blog() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div>
            <p className="text-sm tracking-widest text-muted-foreground mb-4">
              <span className="text-violet-500">07//</span> LATEST NEWS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-2">
              Our Activity
            </h2>
            <p className="text-4xl md:text-5xl font-serif italic text-violet-500">
              Related Blog
            </p>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm mt-6 md:mt-0 text-right">
            we're deeply passionate <span className="text-foreground font-medium">catch your lovely memories in cameras</span> and
            Convey your love for every moment of life as a whole.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-muted/30 rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-4 left-4 z-20 bg-violet-500 text-white text-xs px-3 py-1 rounded">
                  {post.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-medium text-foreground mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <button className="inline-flex items-center gap-2 text-sm text-foreground hover:text-violet-500 transition-colors">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <Button variant="outline" className="gap-2 rounded-none border-foreground/20 hover:bg-foreground hover:text-background bg-transparent">
            See More
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
