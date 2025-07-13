import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { InteractiveSkills } from "@/components/interactive-skills"
import { Experience } from "@/components/experience"
import { EventsHosted } from "@/components/events-hosted"
import { StartupsWorked } from "@/components/startups-worked"
import { PersonalProjects } from "@/components/personal-projects"
import { Speaking } from "@/components/speaking"
import { PartnersBrands } from "@/components/partners-brands"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { CommunityCTA } from "@/components/community-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <InteractiveSkills />
      <PersonalProjects />
      <EventsHosted />
      <StartupsWorked />
      <Testimonials />
      <Speaking />
      <PartnersBrands />
      <Experience />
      <Achievements />
      <CommunityCTA />
      <Contact />
      <Footer />
    </main>
  )
}
