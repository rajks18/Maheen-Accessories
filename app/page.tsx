import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PhotoAlbums } from "@/components/photo-albums"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Policies } from "@/components/policies"
import { Portfolio } from "@/components/portfolio"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Partners } from "@/components/partners"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <PhotoAlbums />
      <About />
      <WhyChooseUs />
      <Policies />
      <Portfolio />
      <Team />
      <Testimonials />
      <Partners />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
